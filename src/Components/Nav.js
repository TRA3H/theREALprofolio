import React from "react";

//TODO need to install react package to create an About me page
//TODO wrap the list items as links so we can have a multi page website
//TODO need to make the list items on the left
//TODO we need to make it responsive to mobile
//TODO if mobile then we need to make the nav bar condensed three bars

function Nav() {
  return (
    <div className="nav_container">
      <ul>
        <li className="nav_items">About</li>
        <li className="nav_items">Contact Me</li>
      </ul>
    </div>
  );
}
export default Nav;
