import React from "react";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          AN ADVENTURE FOR <span>EVERY CYCLIST</span>
        </h2>
      </div>
      <div className="section-center services-center">
        <article className="service">
          <span className="service-icon">
            <i className="fas fa-wallet fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">touring</h4>
            <p className="service-text">classic touring in minblowing places</p>
          </div>
        </article>
        <article className="service">
          <span className="service-icon">
            <i className="fas fa-tree fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">road</h4>
            <p className="service-text">push your body, feast your senses</p>
          </div>
        </article>
        <article className="service">
          <span className="service-icon">
            <i className="fas fa-socks fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">trails</h4>
            <p className="service-text">jungles, rivers, mountains and more</p>
          </div>
        </article>
        <article className="service">
          <span className="service-icon">
            <i className="fas fa-socks fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">weekenders</h4>
            <p className="service-text">memorable weekends in amazing places</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
