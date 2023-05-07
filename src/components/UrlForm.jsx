import { useState } from 'react';

function UrlForm() {
  const API_SHRTCODE = 'https://api.shrtco.de/v2/shorten?url=';

  const [urlFull, setUrlFull] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  function handleChange(event) {
    const { value } = event.target;
    setUrlFull(value);
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const response = await fetch(`${API_SHRTCODE}${urlFull}`);
      const data = await response.json();
      data.ok ? console.log(data.result.short_link) : displayErrorMessage(data);
      /*  console.log(data); */
    } catch (error) {
      console.log(error);
    }
  }

  function displayErrorMessage(data) {
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
      <form onSubmit={handleSubmit} className="url-shortening-form">
        <input
          type="text"
          placeholder="Shorten a link here..."
          onChange={handleChange}
          name="urlFull"
          value={urlFull}
          className="url-input-field"
        />
        <label htmlFor="urlFull">{errorMessage}</label>
        <button className="btn-main btn-shorten">Shorten It!</button>
      </form>
    </main>
  );
}

export default UrlForm;
