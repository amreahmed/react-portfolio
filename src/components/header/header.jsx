import React from "react";
import "./header.css";
import CTA from "./CTA.jsx";
import ME from "../../assets/my.png"
import HeaderSocials from "./HeaderSocials.jsx";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Amr <span className="name__span">Ezzat</span></h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src= {ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
        
      </div>
    </header>
  );
};

export default Header;
