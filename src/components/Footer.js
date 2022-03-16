import React from "react";

const Footer = () => {
  return (
    <footer className="section-class footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link scroll-link">
            home
          </a>
        </li>
        <li>
          <a href="#about" className="footer-link scroll-link">
            about
          </a>
        </li>
        <li>
          <a href="#services" className="footer-link scroll-link">
            services
          </a>
        </li>
        <li>
          <a href="#featured" className="footer-link scroll-link">
            featured
          </a>
        </li>
        <li>
          <a href="#gallery" className="footer-link scroll-link">
            gallery
          </a>
        </li>
      </ul>

      <ul className="footer-icons">
        <li>
          <a
            href="#https://twitter.com"
            className="footer-icon"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="#https://facebook.com"
            className="footer-icon"
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="#https://squarespace.com"
            className="footer-icon"
            target="_blank"
          >
            <i className="fab fa-squarespace"></i>
          </a>
        </li>
      </ul>

      <p className="copyright">
        copyright &copy; backroads travel company{" "}
        <span id="date">, all rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
