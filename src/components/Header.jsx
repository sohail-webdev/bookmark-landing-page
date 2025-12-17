import bookmark_logo from "../assets/logo-bookmark.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={bookmark_logo} alt="bookmark logo" />
      <div className="nav-links-cta-container">
        <nav>
          <ul className="nav-links-container">
            <li className="nav-link">FEATURES</li>
            <li className="nav-link">PRICING</li>
            <li className="nav-link">CONTACT</li>
          </ul>
        </nav>
        <button className="button login-button">LOGIN</button>
      </div>
    </div>
  );
}
