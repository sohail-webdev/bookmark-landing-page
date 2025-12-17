import extension_card_separator_image from "../assets/bg-dots.svg";
import chrome_logo from "../assets/browser-logos/chrome.svg";
import safari_logo from "../assets/browser-logos/safari.svg";
import opera_logo from "../assets/browser-logos/opera.svg";

const extension_cards = [
  {
    image: chrome_logo,
    name: "Chrome",
    minimum_version: 62,
  },
  {
    image: safari_logo,
    name: "Safari",
    minimum_version: 14,
  },
  {
    image: opera_logo,
    name: "Opera",
    minimum_version: 46,
  },
];

function ExtensionCard({ card }) {
  const { image, name, minimum_version } = card;
  return (
    <div className="extension-card">
      <img src={image} alt="" className="extension-card-logo" />
      <p className="extension-card-cta-text">Add to {name}</p>
      <p className="extension-card-minimum-version">Minimum version {minimum_version}</p>
      <img src={extension_card_separator_image} alt="" className="extension-card-separator-icon" />
      <button className="button primary-button">Add & Install Extension</button>
    </div>
  );
}

export default function DownloadExtension() {
  return (
    <section className="section section-download-extension">
      <div className="section-header section-download-extension-header">
        <h2>Download the extension</h2>
        <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      </div>
      <div className="section-download-extension-cards-container">
        {extension_cards.map(card => (
          <ExtensionCard key={card.name} card={card} />
        ))}
      </div>
    </section>
  );
}
