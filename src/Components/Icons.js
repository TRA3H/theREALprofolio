import React, { useState } from "react";
import useBoop from "./useBoop";
import { animated } from "react-spring";

//TO DO MAKE THE ICONS RESPONSIVE AND HOVER STATES NOT FINISHED
//TO DO icons are moving together, need to seperate them
function Icons() {
  const [style0, trigger0] = useBoop({ x: 5, rotation: 20 });
  const [style1, trigger1] = useBoop({ x: -5, rotation: 17 });
  const [style2, trigger2] = useBoop({ x: 5, rotation: 19 });
  const [style3, trigger3] = useBoop({ x: -5, rotation: 18 });

  return (
    <div className="icon-container">
      {/* //Instagram */}
      <a href="https://www.instagram.com/cyrusbaebae/">
        <animated.img
          onMouseEnter={trigger0}
          style={style0}
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          alt="insta"
        />
      </a>
      {/* {//GitHub} */}
      <a href="https://github.com/TRA3H">
        <animated.img
          onMouseEnter={trigger1}
          style={style1}
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
          alt="Github"
        />
      </a>
      {/* {//Linkedin} */}
      <a href="https://www.linkedin.com/in/cyrus-baybay-69a809175/">
        <animated.img
          onMouseEnter={trigger2}
          style={style2}
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="Linkedin"
        />
      </a>
      {/* {//Twitter} */}
      <a href="https://twitter.com/CyrusBaebae">
        <animated.img
          onMouseEnter={trigger3}
          style={style3}
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png"
          alt="Twitter"
        />
      </a>
    </div>
  );
}

export default Icons;
