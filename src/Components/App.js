import React, { useState, useEffect } from "react";
import "../css/App.css";
import Nav from "./Nav";
import Heading from "./Heading";
import Icons from "./Icons";

function App() {
  return (
    <div>
      <Nav />
      <Heading />
      <Icons />
    </div>
  );
}

export default App;
