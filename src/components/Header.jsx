import shortlyLogo from '../assets/imgs/logo.svg';

function Header() {
  return (
    <nav>
      <div>
        <img
          src={shortlyLogo}
          alt="Simple logo of company name - Shortly"
          className="logo"
        />
        <ul className="menu-items">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <ul className="auth-buttons">
        <li>
          <button>Login</button>
          <button>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
