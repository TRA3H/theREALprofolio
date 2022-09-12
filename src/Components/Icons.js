import React, { useState } from "react";

//TO DO MAKE THE ICONS RESPONSIVE AND HOVER STATES NOT FINISHED

function Icons() {
  const [isHovered, setHover] = useState(false);
  function Hovered() {}

  return (
    <div className="icon-position">
      {/* //Instagram */}
      <a onMouseEnter={Hovered} href="https://www.instagram.com/cyrusbaebae/">
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
