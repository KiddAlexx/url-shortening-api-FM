import InfoCard from './InfoCard';

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
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </section>
  );
}

export default Features;
