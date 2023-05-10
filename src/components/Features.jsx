import InfoCard from './InfoCard';
import iconBrandRecognition from '../assets/imgs/icon-brand-recognition.svg';
import iconDetailedRecords from '../assets/imgs/icon-detailed-records.svg';
import iconFullyCustomizable from '../assets/imgs/icon-fully-customizable.svg';

function Features() {
  return (
    <section className="features">
      <div className="statistics-container">
        <h2 className="statistics-heading">Advanced Statistics</h2>
        <p className="statistics-description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <InfoCard
        infoIcon={iconBrandRecognition}
        infoHeading="Brand Recognition"
        infoContent="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
      />
      <InfoCard
        infoIcon={iconDetailedRecords}
        infoHeading="Detailed Records"
        infoContent="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
      />
      <InfoCard
        infoIcon={iconFullyCustomizable}
        infoHeading="Fully Customizable"
        infoContent="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
      />
    </section>
  );
}

export default Features;
