import bookmark_logo_white_text from "../assets/logo-bookmark-white-text.svg";

export default function Footer() {
  return (
    <footer>
      <div className="logo-nav-links-container">
        <img src={bookmark_logo_white_text} alt="" />
        <nav>
          <ul className="nav-links-container">
            <li className="nav-link">
              <a href="#">Features</a>
            </li>
            <li className="nav-link">
              <a href="#">Pricing</a>
            </li>
            <li className="nav-link">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="social-media-links-container">
        <a href="#">
          <svg
            className="footer-social-media-icon"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 512"
          >
            <path
              fill="#fff"
              d="M512 256C512 114.62 397.38 0 256 0S0 114.62 0 256s114.62 256 256 256 256-114.62 256-256zm-396.12-2.7c74.63-32.52 124.39-53.95 149.29-64.31 71.1-29.57 85.87-34.71 95.5-34.88 2.12-.03 6.85.49 9.92 2.98 2.59 2.1 3.3 4.94 3.64 6.93.34 2 .77 6.53.43 10.08-3.85 40.48-20.52 138.71-29 184.05-3.59 19.19-10.66 25.62-17.5 26.25-14.86 1.37-26.15-9.83-40.55-19.27-22.53-14.76-35.26-23.96-57.13-38.37-25.28-16.66-8.89-25.81 5.51-40.77 3.77-3.92 69.27-63.5 70.54-68.9.16-.68.31-3.2-1.19-4.53s-3.71-.87-5.3-.51c-2.26.51-38.25 24.3-107.98 71.37-10.22 7.02-19.48 10.43-27.77 10.26-9.14-.2-26.72-5.17-39.79-9.42-16.03-5.21-28.77-7.97-27.66-16.82.57-4.61 6.92-9.32 19.04-14.14z"
            />
          </svg>
        </a>
        <a href="#">
          <svg
            className="footer-social-media-icon"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 509.64"
          >
            <path
              fill="#fff"
              d="M115.612 0h280.776C459.975 0 512 52.025 512 115.612v278.416c0 63.587-52.025 115.612-115.612 115.612H115.612C52.025 509.64 0 457.615 0 394.028V115.612C0 52.025 52.025 0 115.612 0zm208.127 148.355h36.12l-78.913 90.197 92.838 122.735h-72.695l-56.932-74.439-65.145 74.439h-36.146l84.407-96.474-89.058-116.458h74.535l51.464 68.04 59.525-68.04zM311.06 339.666h20.018L201.876 168.842h-21.478L311.06 339.666z"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
