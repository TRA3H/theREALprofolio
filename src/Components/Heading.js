import React, { useState, useEffect, Component } from "react";
import { TypeAnimation } from "react-type-animation";
import MediaQuery from "react-responsive";

const test = "test";

//TO DO MAKE THE h1 TYPING RESPONSIVE using https://www.npmjs.com/package/react-responsive
//TO DO MAKE THE WORDS HAVE GOOGLE COLORS TO EACH WORD WHEN TYPED OUT

function Heading() {
  return (
    <div className="header_container">
      <MediaQuery minWidth={1000}>
        <TypeAnimation
          sequence={[
            "Hello! I'm Cyrus Baybay.",
            3000,
            "Cyrus.SoftwareEngineer",
            2000,
            "Cyrus.FullStackDeveloper",
            2000,
            () => {},
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          className={"main"}
        />
      </MediaQuery>
      <MediaQuery maxWidth={1000}>
        <TypeAnimation
          sequence={[
            "Hello!", // Types 'One'
            3000,
            "I'm Cyrus.", // Deletes 'One' and types 'Two'
            2000,
            "Software Engineer.",
            2000,
            "FullStack Developer.",
            2000,
            () => {},
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "30px" }}
          className={"main"}
        />
      </MediaQuery>
    </div>
  );
}

export default Heading;
