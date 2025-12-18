function Accordion({ accordion, toggle_accordion }) {
  const { title, content } = accordion;
  return (
    <div className={`faq-accordion${accordion.is_content_visible ? " content-visible" : ""}`}>
      <button className="button faq-accordion-button" data-id={accordion.id} onClick={toggle_accordion}>
        <p className="faq-accordion-button-text">{title}</p>
        <svg className="faq-accordion-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="12">
          <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8" />
        </svg>
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
