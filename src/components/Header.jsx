import bookmark_logo from "../assets/logo-bookmark.svg";
import hanburger_icon from "../assets/icon-hamburger.svg";

export default function Header({ toggle_mobile_navbar_visibility }) {
  return (
    <header className="header">
      <img src={bookmark_logo} alt="bookmark logo" />
      <div className="nav-links-cta-container">
        <nav>
          <ul className="nav-links-container">
            <li className="nav-link">
              <a>Features</a>
            </li>
            <li className="nav-link">
              <a>Pricing</a>
            </li>
            <li className="nav-link">
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        <button className="button login-button secondary-button">Login</button>
      </div>
      <button className="button toggle-navbar-button" onClick={toggle_mobile_navbar_visibility}>
        <img src={hanburger_icon} alt="" />
      </button>
    </header>
  );
}
