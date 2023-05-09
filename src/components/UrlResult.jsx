function UrlResult(props) {
  const linkElements = props.urlData.map((urlObject) => (
    <div className="link-container" key={urlObject.id}>
      <p className="url-original">{urlObject.urlOriginal}</p>
      <div>
        <p className="url-short">{urlObject.urlShort}</p>
        <button
          onClick={() => props.handleClick(urlObject)}
          className={`btn-copy-url btn-main ${
            urlObject.copied ? 'btn-copied' : ''
          }`}
        >
          {urlObject.copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  ));

  return <div>{linkElements}</div>;
}
export default UrlResult;
