import { useCallback, useRef } from "react";
import error_icon from "../assets/icon-error.svg";

export default function Contact() {
  const input_ref = useRef(null);
  const report_input_validity = useCallback(() => {
    if (!input_ref.current) return;
    if (input_ref.current.checkValidity()) input_ref.current.classList.remove("invalid");
    else input_ref.current.classList.add("invalid");
  }, []);

  return (
    <section className="section section-contact">
      <p>35,000+ already joined</p>
      <h2>Stay up-to-date with what we’re doing</h2>
      <div className="contact-us-container">
        <div className="email-input-wrapper">
          <div className="input-wrapper">
            <input
              ref={input_ref}
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="text-input"
              onInput={event => (event.target.classList.contains("invalid") ? report_input_validity() : null)}
            />
            <img src={error_icon} alt="" />
          </div>
          <p>Whoops, make sure it's an email</p>
        </div>
        <button className="button secondary-button" onClick={report_input_validity}>
          Contact Us
        </button>
      </div>
    </section>
  );
}
