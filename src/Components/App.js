import React, { useState, useEffect } from "react";
import "../css/App.css";
import Nav from "./Nav";
import Heading from "./Heading";
import Icons from "./Icons";
import Introduction from "./Introduction";
import MediaQuery from "react-responsive";
import Projects from "./Projects";
import Skills from "./Skills";
import Mobile from "./Mobile";

function App() {
  return (
    <div>
      <MediaQuery minWidth={960}>
        <Nav />
        <Heading />
        <Icons />
        <Introduction />
      </MediaQuery>
      <MediaQuery maxWidth={960}>
        <Mobile />
      </MediaQuery>
    </div>
  );
}

export default App;
