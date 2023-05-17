import shortlyLogo from '../assets/imgs/logo.svg';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

/* State variable for mobile menu */
function Header() {
  const [menuActive, setMenuActive] = useState(false);

  /* Function to toggle menuActive variable, for use with hamburger menu */
  function toggleMenu() {
    setMenuActive((prevState) => !prevState);
  }

  return (
    <nav className="main-nav">
      <img
        src={shortlyLogo}
        alt="Simple logo of company name - Shortly"
        className="logo"
      />
      <div
        className={`menu-auth-container ${
          menuActive ? 'mobile-menu-open' : ''
        }`}
      >
        <div className="nav-left">
          <ul className="nav-menu-items">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <ul className="auth-buttons">
          <li>
            <a href="#" className="btn-login">
              Login
            </a>
          </li>
          <li className="btn-signup-container">
            <button className="btn-signup btn-main">Sign Up</button>
          </li>
        </ul>
      </div>
      <Hamburger
        color="#9e9aa8"
        easing="ease-in"
        className="btn-mobile-menu"
        onToggle={toggleMenu}
      />
    </nav>
  );
}

export default Header;
