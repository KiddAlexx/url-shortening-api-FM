import heroImage from '../assets/imgs/illustration-working.svg';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <button className="btn-main">Get Started</button>
      </div>
      <img
        className="hero-img"
        src={heroImage}
        alt="Illustration of a person working at a desk with a computer"
      />
    </div>
  );
}

export default Hero;
