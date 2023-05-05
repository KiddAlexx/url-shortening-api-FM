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
          <a href="#" className='btn-login'>Login</a>
        </li>
        <li>
          <button className="btn-signup btn-main">Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
