function UrlResult(props) {
  const linkElements = props.urlData.map((data) => (
    <div className="link-container" key={data.id}>
      <p className="url-original">{data.urlOriginal}</p>
      <div>
        <p className="url-short">{data.urlShort}</p>
        <button
          onClick={() => props.handleClick(data)}
          className="btn-copy-url btn-main"
        >
          {data.copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  ));

  return <div>{linkElements}</div>;
}
export default UrlResult;
