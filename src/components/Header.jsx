import bookmark_logo from "../assets/logo-bookmark.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={bookmark_logo} alt="bookmark logo" />
      <div className="nav-links-cta-container">
        <nav>
          <ul className="nav-links-container">
            <li className="nav-link">Features</li>
            <li className="nav-link">Pricing</li>
            <li className="nav-link">Contact</li>
          </ul>
        </nav>
        <button className="button login-button">Login</button>
      </div>
    </header>
  );
}
