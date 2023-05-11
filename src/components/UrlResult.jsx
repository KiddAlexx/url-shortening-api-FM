function UrlResult(props) {
  const linkElements = props.urlData.map((urlObject) => (
    <div className="link-container" key={urlObject.id}>
      <a className="url-original" href={`http://${urlObject.urlOriginal}`}>
        {urlObject.urlOriginal}
      </a>

      <div>
        <a className="url-short" href={`http://${urlObject.urlShort}`}>
          {urlObject.urlShort}
        </a>
        <button
          onClick={() => props.handleDeleteClick(urlObject)}
          className="btn-main btn-delete"
        >
          Delete
        </button>
        <button
          onClick={() => props.handleCopyClick(urlObject)}
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
