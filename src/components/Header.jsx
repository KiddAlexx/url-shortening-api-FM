import shortlyLogo from '../assets/imgs/logo.svg';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    setMenuActive((prevState) => !prevState);
    console.log(menuActive);
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
        className="btn-mobile-menu"
        onToggle={toggleMenu}
      />
    </nav>
  );
}

export default Header;
