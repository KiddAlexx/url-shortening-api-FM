import shortlyLogo from '../assets/imgs/logo.svg';
import facebookIcon from '../assets/imgs/icon-facebook.svg';
import twitterIcon from '../assets/imgs/icon-twitter.svg';
import pinterestIcon from '../assets/imgs/icon-pinterest.svg';
import instagramIcon from '../assets/imgs/icon-instagram.svg';

function Footer() {
  return (
    <footer className="footer-container">
      <img
        src={shortlyLogo}
        alt="Simple logo of company name - Shortly"
        className="logo"
      />
      <nav className="footer-nav">
        <div className="footer-nav-container">
          <h4 className="footer-nav-heading">Features</h4>
          <ul className="footer-nav-items">
            <li>
              <a href="#">Link Shortening</a>
            </li>
            <li>
              <a href="#">Branded Links</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
          </ul>
        </div>
        <div className="footer-nav-container">
          <h4 className="footer-nav-heading">Resources</h4>
          <ul className="footer-nav-items">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="footer-nav-container">
          <h4 className="footer-nav-heading">Company</h4>
          <ul className="footer-nav-items">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="socials-container">
        <a href="#">
          <img
            src={facebookIcon}
            alt="small white icon for social media platform facebook"
          />
        </a>
        <a href="#">
          <img
            src={twitterIcon}
            alt="small white icon for social media platform twitter"
          />
        </a>
        <a href="#">
          <img
            src={pinterestIcon}
            alt="small white icon for social media platform pinterest"
          />
        </a>
        <a href="#">
          <img
            src={instagramIcon}
            alt="small white icon for social media platform instagram"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
