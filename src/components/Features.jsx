import illustration_features_tab_1 from "../assets/illustration-features-tab-1.svg";
import illustration_features_tab_2 from "../assets/illustration-features-tab-2.svg";
import illustration_features_tab_3 from "../assets/illustration-features-tab-3.svg";

const features_tab_contents = [
  {
    id: 1,
    heading: "Bookmark in one click",
    paragraph:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: illustration_features_tab_1,
  },
  {
    id: 2,
    heading: "Intelligent search",
    paragraph: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: illustration_features_tab_2,
  },
  {
    id: 3,
    heading: "Share your bookmarks",
    paragraph: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: illustration_features_tab_3,
  },
];

function FeaturesTab({ tab }) {
  const { heading, paragraph, image } = tab;
  return (
    <div className="features-tab-simple-bookmarking">
      <div className="features-tab-illustration-wrapper">
        <img src={image} alt="" className="features-tab-illustration" />
      </div>
      <div className="features-tab-content">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <button className="button primary-button">More Info</button>
      </div>
    </div>
  );
}

function FeaturesTabs({ active_features_tab_id, set_active_features_tab_id }) {
  const tab = features_tab_contents.find(tab => tab.id === active_features_tab_id);

  return (
    <div className="section-features-tabs-container">
      <div className="features-tab-switcher-container">
        <div className="features-tab-switcher-button-wrapper">
          <button
            className={`button features-tab-switcher-button${active_features_tab_id === 1 ? " active" : ""}`}
            data-tab-id="1"
            onClick={set_active_features_tab_id}
          >
            <div className="features-tab-switcher-button-text">Simple Bookmarking</div>
          </button>
        </div>
        <div className="features-tab-switcher-button-wrapper">
          <button
            className={`button features-tab-switcher-button${active_features_tab_id === 2 ? " active" : ""}`}
            data-tab-id="2"
            onClick={set_active_features_tab_id}
          >
            <div className="features-tab-switcher-button-text">Speedy Searching</div>
          </button>
        </div>
        <div className="features-tab-switcher-button-wrapper">
          <button
            className={`button features-tab-switcher-button${active_features_tab_id === 3 ? " active" : ""}`}
            data-tab-id="3"
            onClick={set_active_features_tab_id}
          >
            <div className="features-tab-switcher-button-text">Easy Sharing</div>
          </button>
        </div>
      </div>
      <div className="features-tabs-wrapper">{tab ? <FeaturesTab tab={tab} /> : <h2>Invalid Tab Selected</h2>}</div>
    </div>
  );
}

export default function Features({ active_features_tab_id, set_active_features_tab_id }) {
  return (
    <section className="section section-features">
      <div className="section-header section-features-header">
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <FeaturesTabs active_features_tab_id={active_features_tab_id} set_active_features_tab_id={set_active_features_tab_id} />
    </section>
  );
}
