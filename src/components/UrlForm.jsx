import { useState, useEffect } from 'react';
import UrlResult from './UrlResult';
import { nanoid } from 'nanoid';

function UrlForm() {
  const API_SHRTCODE = 'https://api.shrtco.de/v2/shorten?url=';

  const [urlForm, setUrlForm] = useState('');
  const [urlData, setUrlData] = useState(
    JSON.parse(localStorage.getItem('urlDataLocal')) || []
  );
  const [errorMessage, setErrorMessage] = useState(null);

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

  useEffect(() => {
    localStorage.setItem('urlDataLocal', JSON.stringify(urlData));
  }, [urlData]);

  function handleChange(event) {
    const { value } = event.target;
    setUrlForm(value);
  }

  function generateShortUrl(data) {
    setUrlData((prevUrlData) => [
      ...prevUrlData,
      { urlOriginal: urlForm, urlShort: data, id: nanoid(), copied: false },
    ]);
    setErrorMessage(null);
    setUrlForm('');
    console.log(urlData);
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const response = await fetch(`${API_SHRTCODE}${urlForm}`);
      const data = await response.json();
      data.ok
        ? generateShortUrl(data.result.short_link)
        : generateErrorMessage(data);
      /*  console.log(data); */
    } catch (error) {
      console.log(error);
    }
  }

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
        <UrlResult urlData={urlData} handleClick={copyUrl} />
      </div>
    </main>
  );
}

export default UrlForm;
