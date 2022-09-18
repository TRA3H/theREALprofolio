import React from "react";

function Introduction() {
  return (
    <div className="introduction_container">
      <h1 className="main">What I love to do</h1>
      <div className="intro_group">
        <div className="intro_group_skill">
          <img
            className="giphy_img"
            src="https://media4.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif?cid=ecf05e47ax994vtt9diyli9ntdrqf249ft96u9w7e3b49q28&rid=giphy.gif&ct=s"
          ></img>
        </div>
        <div className="intro_group_skill">
          <h2 className="sub_main">Full Stack Devleopment</h2>
          <p>☄️ Building responsive animated websites front end using React</p>
          <p>☄️ Backend applications in Node, Express, MongoDB, & Flask</p>
          <p>☄️ Mobile Devleopment using Swift</p>
        </div>
      </div>

      <div className="intro_group">
        <div className="intro_group_skill">
          <h2 className="sub_main">Machine Learning & A.I.</h2>
          <p>☄️ Webscraping and organizing Data Visualization</p>
          <p>☄️ Automation applications for productivity and effciency</p>
          <p>
            ☄️ Developing highly scalable production ready models for various
            deeplearning and statistical use cases
          </p>
        </div>
        <div className="intro_group_skill">
          <img src="https://media1.giphy.com/media/AHu1HF5R96OzIXirXL/giphy.gif?cid=ecf05e479mvuqc909pqbe9ch21m3kyixrd82fv6cmqihydqx&rid=giphy.gif&ct=s"></img>
        </div>
      </div>

      <div className="intro_group">
        <div className="intro_group_skill">
          <img src="https://media1.giphy.com/media/DdpmhAQpQZzwHSrQ3f/giphy.gif?cid=ecf05e4712ct85m55okrrcfeied8d4w1ru5p1d8azbiz2ojh&rid=giphy.gif&ct=s"></img>
        </div>
        <div className="intro_group_skill">
          <h2 className="sub_main">Web3 Devleopment & Blockchain</h2>

          <p>☄️ Developing Smart Contracts in Solidity</p>
          <p>☄️ Creating tools and integration onto the web platform</p>
          <p>
            ☄️ Structuring Blockchain Development to define access controls and
            security
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
