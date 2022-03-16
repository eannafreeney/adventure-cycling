import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ url, text }) => {
  return (
    <li>
      <a href={url} className="nav-link scroll-link">
        {text}
      </a>
    </li>
  );
};

export default Navlink;
