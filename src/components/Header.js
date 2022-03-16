import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header id="home">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
