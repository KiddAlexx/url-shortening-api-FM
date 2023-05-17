import { useState, useEffect } from 'react';
import UrlResult from './UrlResult';
import { nanoid } from 'nanoid';

function UrlForm() {
  // Store route for URL Shortening API
  const API_SHRTCODE = 'https://api.shrtco.de/v2/shorten?url=';
  // Initialise state variables
  const [urlForm, setUrlForm] = useState('');
  // Initialise as empty array if value does not exist in local storage
  const [urlData, setUrlData] = useState(
    JSON.parse(localStorage.getItem('urlDataLocal')) || []
  );
  const [errorMessage, setErrorMessage] = useState(null);

  // Function to entry in urlData - Passed to UrlResult component
  // Recieves urlObject from UrlResult Component
  // Filter urlData - removing object with matching id
  function deleteUrl(urlObject) {
    setUrlData((prevUrlData) =>
      prevUrlData.filter((linkData) => linkData.id !== urlObject.id)
    );
  }

  // Function to copy short link to clipboard
  // Sets copied proery in urlData to true - Used to change text of copy button to copied
  // Reverts copied property to false after 3 seconds
  function copyUrl(urlObject) {
    navigator.clipboard.writeText(urlObject.urlShort);
    setUrlData((prevUrlData) =>
      prevUrlData.map((linkData) =>
        linkData.id === urlObject.id ? { ...linkData, copied: true } : linkData
      )
    );

    setTimeout(() => {
      setUrlData((prevUrlData) =>
        prevUrlData.map((linkData) =>
          linkData.id === urlObject.id
            ? { ...linkData, copied: false }
            : linkData
        )
      );
    }, 3000);
  }

  // Update local storage whenever urlData changes
  useEffect(() => {
    localStorage.setItem('urlDataLocal', JSON.stringify(urlData));
  }, [urlData]);

  // Function to handle input change in the form
  // Updates the value of the urlForm state variable with the input value
  function handleChange(event) {
    const { value } = event.target;
    setUrlForm(value);
  }

  // Function to handle form submission
  // Sends request to API with provided URL
  // Checks response status, then runs function to generate short url or error message
  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const response = await fetch(`${API_SHRTCODE}${urlForm}`);
      const data = await response.json();
      data.ok
        ? generateShortUrl(data.result.short_link)
        : generateErrorMessage(data);
    } catch (error) {
      console.log(error);
    }
  }

  // Function to generate short url
  // Recieves data from handleSubmit and creates a new entry in urlData
  // Uses nanoid to generate unique id
  function generateShortUrl(data) {
    setUrlData((prevUrlData) => [
      ...prevUrlData,
      { urlOriginal: urlForm, urlShort: data, id: nanoid(), copied: false },
    ]);
    setErrorMessage(null);
    setUrlForm('');
  }

  // Function to generate error message
  // Uses shrtcodes's built in error messages
  // Recieves data from handle submit and sets errorMessage state variable
  function generateErrorMessage(data) {
    const error = data.error_code;
    switch (error) {
      case 1:
        setErrorMessage('Please add a link');
        break;
      case 2:
        setErrorMessage('Please add a valid link');
        break;
      case 3:
        setErrorMessage('Please wait a second and try again');
        break;
      case 4:
        setErrorMessage(
          'IP blocked due to violation of service https://shrtco.de/tos'
        );
        break;
      case 5:
        setErrorMessage('Internal error. Please try again');
        break;
      case 6:
        setErrorMessage('Unknown error. Please try again');
        break;

      case 9:
        setErrorMessage('Please check that url is valid and try again');
        break;
      case 10:
        setErrorMessage(
          'Disallowed link. Unable to shorten. https://shrtco.de/disallowed '
        );
        break;
    }
  }

  return (
    <main className="url-app-container">
      <div className="url-form-container">
        <form onSubmit={handleSubmit} className="url-shortening-form">
          <input
            type="text"
            placeholder="Shorten a link here..."
            onChange={handleChange}
            name="urlForm"
            value={urlForm}
            className={`url-input-field ${
              errorMessage ? 'url-input-field-error' : ''
            }`}
          />
          <p className="error-message-minor">{errorMessage}</p>
          <button className="btn-main btn-shorten">Shorten It!</button>
        </form>
      </div>
      <div className="url-results-container">
        <UrlResult
          urlData={urlData}
          handleCopyClick={copyUrl}
          handleDeleteClick={deleteUrl}
        />
      </div>
    </main>
  );
}

export default UrlForm;
