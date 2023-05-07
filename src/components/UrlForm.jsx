import { useState } from 'react';

function UrlForm() {
  const API_SHRTCODE = 'https://api.shrtco.de/v2/shorten?url=';

  const [urlFull, setUrlFull] = useState('');

  function handleChange(event) {
    const { value } = event.target;
    setUrlFull(value);
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const response = await fetch(`${API_SHRTCODE}${urlFull}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
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
        <button className="btn-main btn-shorten">Shorten It!</button>
      </form>
    </main>
  );
}

export default UrlForm;
