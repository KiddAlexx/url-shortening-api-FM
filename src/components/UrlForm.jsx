import { useState } from 'react';

function UrlForm() {
  const API_SHRTCODE = 'https://api.shrtco.de/v2/shorten?url=';

  const [urlFull, setUrlFull] = useState('');

  function handleChange(event) {
    const { value } = event.target;
    setUrlFull(value);
    console.log(urlFull);
  }

  return (
    <main className="url-app-container">
      <form action="" className="url-shortening-form">
        <input
          type="text"
          placeholder="Shorten a link here..."
          onChange={handleChange}
          name="urlFull"
          className="url-input-field"
        />
        <button className="btn-main btn-shorten">Shorten It!</button>
      </form>
    </main>
  );
}

export default UrlForm;
