import illustration_hero from "../assets/illustration-hero.svg";

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="section-hero-content">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="section-hero-cta-buttons">
          <button className="button primary-cta-button">Get it on Chrome</button>
          <button className="button secondary-cta-button">Get it on Firefox</button>
        </div>
      </div>
      <div className="section-hero-illustration-wrapper">
        <img src={illustration_hero} alt="" className="section-hero-illustration" />
      </div>
    </section>
  );
}
