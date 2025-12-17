import illustration_features_tab_1 from "../assets/illustration-features-tab-1.svg";

function FeaturesTabSimpleBookmarking() {
  return (
    <div className="features-tab-simple-bookmarking">
      <div className="features-tab-illustration-wrapper">
        <img src={illustration_features_tab_1} alt="" className="features-tab-illustration" />
      </div>
      <div className="features-tab-content">
        <h2>Bookmark in one click</h2>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite
          sites.
        </p>
        <button className="button primary-cta-button">More Info</button>
      </div>
    </div>
  );
}

function FeaturesTabs({ active_features_tab_id, set_active_features_tab_id }) {
  return (
    <div className="section-features-tabs-container">
      <div className="features-tab-switcher-container">
        <button
          className={`button features-tab-switcher-button${active_features_tab_id === 1 ? " active" : ""}`}
          data-tab-id="1"
          onClick={set_active_features_tab_id}
        >
          Simple Bookmarking
        </button>
        <button
          className={`button features-tab-switcher-button${active_features_tab_id === 2 ? " active" : ""}`}
          data-tab-id="2"
          onClick={set_active_features_tab_id}
        >
          Speedy Searching
        </button>
        <button
          className={`button features-tab-switcher-button${active_features_tab_id === 3 ? " active" : ""}`}
          data-tab-id="3"
          onClick={set_active_features_tab_id}
        >
          Easy Sharing
        </button>
      </div>
      <div className="features-tabs-wrapper">{active_features_tab_id === 1 ? <FeaturesTabSimpleBookmarking /> : <p>Invalid Tab Selected</p>}</div>
    </div>
  );
}

export default function Features({ active_features_tab_id, set_active_features_tab_id }) {
  return (
    <section className="section-features">
      <div className="section-features-header">
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
