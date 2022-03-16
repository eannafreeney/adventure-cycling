import React from "react";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section-center contact-center">
        <article className="contact-title">
          <h3>want latest tour info?</h3>
          <p>sign up for the newsletter and stay conencted</p>
        </article>
        <form className="contact-form">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="your email"
          />
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
