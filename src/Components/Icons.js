import React, { useState } from "react";
import useBoop from "./useBoop";
import { animated } from 'react-spring';

//TO DO MAKE THE ICONS RESPONSIVE AND HOVER STATES NOT FINISHED

function Icons() {
  const Boop = ({ children, ...boopConfig }) => {
    const [style, trigger] = useBoop(boopConfig);
    return (
      <animated.span onMouseEnter={trigger} style={style}>
        <img></img>
      </animated.span>
    );
  };
  return (
    <div className="icon-position">
      {/* //Instagram */}
      <a href="https://www.instagram.com/cyrusbaebae/">
        <img
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          alt="insta"
        />
      </a>
      {/* {//GitHub} */}
      <a href="https://github.com/TRA3H">
        <img
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
          alt="Github"
        />
      </a>
      {/* {//Linkedin} */}
      <a href="https://www.linkedin.com/in/cyrus-baybay-69a809175/">
        <img
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="Linkedin"
        />
      </a>
      {/* {//Twitter} */}
      <a href="https://twitter.com/CyrusBaebae">
        <img
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png"
          alt="Twitter"
        />
      </a>
    </div>
  );
}

export default Icons;
