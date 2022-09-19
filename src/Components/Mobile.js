import React from "react";
import "../css/Mobile.css";
import useBoop from "./useBoop";
import { animated } from "react-spring";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

function Mobile() {
  const Spin = (cycle) => ({
    in: {
      style: {
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
    out: {
      style: {
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
  });
  const FadeUp = batch(Fade(), Move(), Sticky());

  const [style0, trigger0] = useBoop({ x: 5, rotation: 20 });
  const [style1, trigger1] = useBoop({ x: -5, rotation: 17 });
  const [style2, trigger2] = useBoop({ x: 5, rotation: 19 });
  const [style3, trigger3] = useBoop({ x: -5, rotation: 18 });
  return (
    <div className="mobile_container">
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), Spin(-3))}>
            <span style={{ width: "100%", fontSize: "36px" }}>Swipe up ☝️</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), ZoomIn(), MoveIn())}>
            <span style={{ fontSize: "40px" }}>What it is!</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
            }}
          >
            <Animator animation={batch(Move(), Sticky(), ZoomIn(), Fade())}>
              <span style={{ display: "flex", fontSize: "40px" }}>
                I am Cyrus Baybay 🤭
              </span>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div
            className="mobile_container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <span style={{ fontSize: "36px" }}>
              <Animator animation={MoveIn(-1000, 0)}>
                <span>💻Full Stack Dev</span>
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>
                <br />
                <span>Software Engineer🔨</span>
                <br />
              </Animator>
              <Animator animation={batch(FadeIn(), MoveOut(1000, 0))}>
                <br />
                <span>🧠Automation & AI</span>
                <br />
              </Animator>
              <Animator animation={batch(FadeIn(), MoveOut(-1000, 0))}>
                <br />
                <span>Web3 Applications📝</span>
                <br />
              </Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div
            className="mobile_container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
            }}
          >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={batch(MoveIn(0, -1000))}>
                <span>I am involved in:</span>
                <br />
              </Animator>
              <Animator animation={batch(MoveIn(0, 1000))}>
                <br />
                <span style={{ fontSize: "30px" }}>
                  🖥️ -Association of Computer Machinery-
                </span>
                <br />
              </Animator>
              <Animator animation={batch(MoveIn(0, 1000))}>
                <br />
                <span style={{ fontSize: "30px" }}>
                  🧧 -Vietnamese Student Association-
                </span>
                <br />
              </Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Move(0, 1000))}>
            <div
              className="mobile_container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
              }}
            >
              <span
                style={{
                  flex: 1,
                  flexDirection: "row",
                  fontSize: "30px",
                  textAlign: "center",
                }}
              >
                📱 Add me on Social Media!
              </span>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div style={{ display: "flex" }}>
            <span>
              <Animator animation={batch(Sticky(50), Move(-1000, 0))}>
                <a href="https://www.instagram.com/cyrusbaebae/">
                  <animated.img
                    className="icon"
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  />
                </a>
              </Animator>
              <Animator animation={batch(Sticky(68), Move(-1000, 0))}>
                <a href="https://github.com/TRA3H">
                  <animated.img
                    onMouseEnter={trigger1}
                    style={style1}
                    className="icon"
                    src="https://cdn.discordapp.com/attachments/1011904758291890246/1021216837859541042/github.png"
                    alt="Github"
                  />
                </a>
              </Animator>
              {/* {//Linkedin} */}
              <Animator animation={batch(Sticky(32), Move(1000, 0))}>
                <a href="https://www.linkedin.com/in/cyrus-baybay-69a809175/">
                  <animated.img
                    onMouseEnter={trigger2}
                    style={style2}
                    className="icon"
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                    alt="Linkedin"
                  />
                </a>
              </Animator>
              <Animator animation={batch(Sticky(50), Move(1000, 0))}>
                {/* {//Twitter} */}
                <a href="https://twitter.com/CyrusBaebae">
                  <animated.img
                    onMouseEnter={trigger3}
                    style={style3}
                    className="icon"
                    src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png"
                    alt="Twitter"
                  />
                </a>
              </Animator>
            </span>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default Mobile;
