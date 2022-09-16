import React, { useState, useEffect } from "react";
import "../css/App.css";
import Nav from "./Nav";
import Heading from "./Heading";
import Icons from "./Icons";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div>
      <Nav />
      <Heading />
      <Icons />
      <Introduction />
    </div>
  );
}

export default App;
