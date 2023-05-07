function UrlForm() {
  return (
    <main className="url-app-container">
      <form action="" className="url-shortening-form">
        <input
          type="text"
          placeholder="Shorten a link here..."
          name="urlFull"
          className="url-input-field"
        />
        <button className="btn-main btn-shorten">Shorten It!</button>
      </form>
    </main>
  );
}

export default UrlForm;
