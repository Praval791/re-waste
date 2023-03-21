import React from "react";
import styled from "styled-components";
import portfolio3 from "assets/port4.jpg";
import portfolio4 from "assets/port5.jpg";
import portfolio5 from "assets/port3.jpg";
import portfolio6 from "assets/port1.jpg";
import portfolio7 from "assets/port2.jpg";
import portfolio8 from "assets/port6.jpg";
import portfolio9 from "assets/port7.jpg";
import portfolio10 from "assets/port8.jpg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { portfolioAnimations } from "animation";

function Portfolio() {
  const [element, controls] = useScroll();
  return (
    <Section id="portfolio" ref={element}>
      <div className="grid">
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-one grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-two grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-three grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-four grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-five grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-six grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-seven grid-box"
        ></motion.div>
        <motion.div
          variants={portfolioAnimations}
          animate={controls}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
          className="child-eight grid-box"
        ></motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: var(--secondary-color);
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "one one two two"
      "one one three four"
      "five six seven seven"
      "eight six seven seven";
    .grid-box {
      height: 15rem;
      width: 100%;
      cursor: pointer;
      &:nth-of-type(1) {
        grid-area: one;
        background: url(${portfolio3}) no-repeat right center;
        background-size: cover;
        height: 100%;
        z-index: 10;
      }
      &:nth-of-type(2) {
        grid-area: two;
        background: url(${portfolio4}) no-repeat center center;
        background-size: cover;
        z-index: 10;
      }
      &:nth-of-type(3) {
        grid-area: three;
        background: url(${portfolio5}) no-repeat right center;
        background-size: cover;
      }
      &:nth-of-type(4) {
        grid-area: four;
        background: url(${portfolio10}) no-repeat center center;
        background-size: cover;
      }
      &:nth-of-type(5) {
        z-index: 10;
        grid-area: five;
        background: url(${portfolio7}) no-repeat right center;
        background-size: cover;
      }
      &:nth-of-type(6) {
        grid-area: six;
        background: url(${portfolio8}) no-repeat center center;
        background-size: cover;
        height: 100%;
      }
      &:nth-of-type(7) {
        grid-area: seven;
        background: url(${portfolio9}) no-repeat right center;
        background-size: cover;
        height: 100%;
      }
      &:nth-of-type(8) {
        grid-area: eight;
        background: url(${portfolio6}) no-repeat right center;
        background-size: cover;
        z-index: 10;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .grid {
      padding: 0;
      grid-template-columns: 1fr;
      grid-template-areas:
        "one"
        "two"
        "three"
        "four"
        "five"
        "six"
        "seven"
        "eight";
      .grid-box {
        height: 25rem !important;
      }
    }
  }
`;

export default Portfolio;
