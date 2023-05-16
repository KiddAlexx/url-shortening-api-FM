import shortlyLogo from '../assets/imgs/logo.svg';
import { useState } from 'react';

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
          <li>
            <button className="btn-signup btn-main">Sign Up</button>
          </li>
        </ul>
      </div>
      <button className="btn-main btn-mobile-menu" onClick={toggleMenu}>
        Menu
      </button>
    </nav>
  );
}

export default Header;
