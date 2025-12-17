import faq_arrow_icon from "../assets/icon-arrow.svg";

function Accordion({ accordion, toggle_accordion }) {
  const { title, content } = accordion;
  return (
    <div className={`faq-accordion${accordion.is_content_visible ? " content-visible" : ""}`}>
      <button className="button faq-accordion-button" data-id={accordion.id} onClick={toggle_accordion}>
        {title}
        <img src={faq_arrow_icon} alt="" className="faq-accordion-arrow-icon" />
      </button>
      <p className="faq-accordion-content">{content}</p>
    </div>
  );
}

export default function FAQ({ accordions, toggle_accordion }) {
  return (
    <section className="section section-faq">
      <div className="section-header faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      </div>
      <div className="faq-accordions-container">
        {accordions.map(accordion => (
          <Accordion key={accordion.id} accordion={accordion} toggle_accordion={toggle_accordion} />
        ))}
      </div>
      <button className="button primary-button">More Info</button>
    </section>
  );
}
