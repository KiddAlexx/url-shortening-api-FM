function InfoCard(props) {
  return (
    <div className="info-card">
      <div className="info-card-icon-container">
        <img
          className="info-card-icon"
          src={props.infoIcon}
          alt={`Small icon representing ${props.infoHeading}`}
        />
      </div>
      <h3 className="info-card-heading">{props.infoHeading}</h3>
      <p className="info-card-content">{props.infoContent}</p>
    </div>
  );
}

export default InfoCard;
