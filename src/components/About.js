import React from "react";
import aboutImg from "../images/about.jpg";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          About <span>Us</span>
        </h2>
      </div>
      <div className="section-center about-center">
        <article className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </article>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, veniam
            minus eligendi in laborum accusantium tempore repudiandae ipsam
            vitae sint.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, veniam
            minus eligendi in laborum accusantium tempore repudiandae ipsam
            vitae sint.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
