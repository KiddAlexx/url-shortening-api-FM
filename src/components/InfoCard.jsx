function InfoCard(props) {
  return (
    <div className="info-card">
      <img
        className="info-card-icon"
        src={props.infoIcon}
        alt={`Small icon representing ${props.infoHeading}`}
      />
      <h3 className="info-card-heading">{props.infoHeading}</h3>
      <p className="info-card-content">{props.infoContent}</p>
    </div>
  );
}

export default InfoCard;
