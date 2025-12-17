import { useState, useCallback } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DownloadExtension from "./components/DownloadExtension";

function App() {
  const [activeFeaturesTabId, setActiveFeaturesTabId] = useState(1);

  const set_active_features_tab_id = useCallback(event => {
    const input_button = event.target;
    setActiveFeaturesTabId(parseInt(input_button.dataset.tabId));
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features active_features_tab_id={activeFeaturesTabId} set_active_features_tab_id={set_active_features_tab_id} />
        <DownloadExtension />
      </main>
    </>
  );
}

export default App;
