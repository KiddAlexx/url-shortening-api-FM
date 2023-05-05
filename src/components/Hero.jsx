import heroImage from '../assets/imgs/illustration-working.svg';

function Hero() {
  return (
    <div hero-content>
      <div>
        <h1 heading-hero>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
      </div>
      <button className="btn-main">Get Started</button>
      <img
        src={heroImage}
        alt="Illustration of a person working at a desk with a computer"
      />
    </div>
  );
}

export default Hero;
