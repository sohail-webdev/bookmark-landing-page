import bookmark_logo_white_text from "../assets/logo-bookmark-white-text.svg";
import telegram_icon from "../assets/social-media/telegram.svg";
import x_icon from "../assets/social-media/x.svg";

export default function Footer() {
  return (
    <footer>
      <div className="logo-nav-links-container">
        <img src={bookmark_logo_white_text} alt="" />
        <nav>
          <ul className="nav-links-container">
            <li className="nav-link">Features</li>
            <li className="nav-link">Pricing</li>
            <li className="nav-link">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="social-media-links-container">
        <a href="#">
          <img src={telegram_icon} alt="" className="footer-social-media-icon" />
        </a>
        <a href="#">
          <img src={x_icon} alt="" className="footer-social-media-icon" />
        </a>
      </div>
    </footer>
  );
}
