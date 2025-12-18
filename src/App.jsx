import { useState, useCallback } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DownloadExtension from "./components/DownloadExtension";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  const [activeFeaturesTabId, setActiveFeaturesTabId] = useState(1);
  const [accordions, setAccordions] = useState([
    {
      id: 4,
      title: "What is Bookmark?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum adipisci excepturi fugiat quia quasi non inventore rerum, velit quos animi, perferendis voluptatum temporibus ea maxime possimus, aspernatur sit et. Odio numquam mollitia sunt tempora natus quaerat earum officia atque molestiae? Vitae aperiam commodi est deserunt doloribus, necessitatibus voluptates laudantium.",
      is_content_visible: false,
    },
    {
      id: 5,
      title: "How can I request a new browser?",
      content:
        "quibusdam reprehenderit, atque eaque magnam vel sed eos nemo mollitia fuga amet dignissimos asperiores, architecto odio veritatis. Modi est tempora sit culpa ratione numquam natus, minus tenetur, amet officiis quam consectetur laborum. Nam non velit consequuntur ullam officia soluta incidunt et beatae natus totam aliquid ratione, magni vitae, blanditiis quisquam.",
      is_content_visible: false,
    },
    {
      id: 6,
      title: "Is there a mobile app?",
      content:
        "similique necessitatibus deserunt tempore dolorum sint ipsa corrupti repudiandae quia quod. Fugit recusandae laboriosam assumenda necessitatibus veniam eveniet, rem facere nisi maxime nobis cupiditate non similique nostrum perferendis alias optio architecto officiis accusantium. Atque voluptates ut animi quae quibusdam ad illum nesciunt mollitia ratione, exercitationem harum beatae ex itaque expedita",
      is_content_visible: false,
    },
    {
      id: 7,
      title: "What about other Chromium browsers?",
      content:
        "'quas? Vel molestiae delectus iste culpa iusto sit quis sapiente non placeat, adipisci quo doloremque velit laboriosam rem, aut repellendus. Dolorem laboriosam maxime debitis, nisi neque autem voluptas distinctio accusantium eveniet, quisquam sed illum! Aperiam laboriosam laudantium quidem illum corporis animi tempora, assumenda, expedita sequi magni explicabo praesentium consequuntur odio.'",
      is_content_visible: false,
    },
  ]);

  const set_active_features_tab_id = useCallback(event => {
    const input_button = event.target;
    setActiveFeaturesTabId(parseInt(input_button.dataset.tabId));
  }, []);

  const toggle_accordion = useCallback(
    event => {
      const button = event.target;
      const accordion_id = parseInt(button.dataset.id);
      const index = accordions.findIndex(accordion => accordion.id === accordion_id);
      if (index < 0) return;
      const new_accordions = [...accordions];
      new_accordions[index].is_content_visible = !new_accordions[index].is_content_visible;
      setAccordions(new_accordions);
    },
    [accordions]
  );

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features active_features_tab_id={activeFeaturesTabId} set_active_features_tab_id={set_active_features_tab_id} />
        <DownloadExtension />
        <FAQ accordions={accordions} toggle_accordion={toggle_accordion} />
        <Contact />
      </main>
      <Footer />
      <MobileNavBar />
    </>
  );
}

export default App;
