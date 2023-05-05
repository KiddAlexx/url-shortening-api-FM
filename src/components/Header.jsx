import shortlyLogo from '../assets/imgs/logo.svg';

function Header() {
  return (
    <nav className="main-nav">
      <div className="nav-left">
        <img
          src={shortlyLogo}
          alt="Simple logo of company name - Shortly"
          className="logo"
        />
        <ul className="nav-menu-items">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <ul className="auth-buttons">
        <li>
          <button className="btn-login">Login</button>
        </li>
        <li>
          <button className="btn-signup">Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
