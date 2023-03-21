import React from "react";
import styled from "styled-components";
import home from "assets/home1.png";
import play from "assets/play.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>One Step Closer to Sustainable world</h1>
          </div>
          <div className="subTitle">
            <p>A more sustainable world start with us, one gadget at a time</p>
          </div>
          <img className="greenFilter" src={play} alt="Play Button" />
        </div>
      </motion.div>

      <motion.div
        id="infos"
        className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.01, type: "tween", duration: 0.3 }}
      >
        <h1>Who We Are</h1>
        <p>
          At our e-waste management startup, we're passionate about protecting
          the environment while helping individuals and businesses dispose of
          their electronic devices in an eco-friendly way. Join us on our
          mission to create a more sustainable future for generations to come.
        </p>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  .home {
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: var(--primary-color);
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 3.5rem;
          line-height: 5.3rem;
          background: #165902;
          background: linear-gradient(
            114.3deg,
            rgb(19, 126, 57) 0.2%,
            rgb(8, 65, 91) 68.5%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .subTitle {
        p {
          width: 70%;
          font-size: 1.3rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: relative;
    bottom: -7rem;
    right: 0;
    background-color: var(--transparent-color);
    padding: 4rem;
    border-top-left-radius: 30px;
    margin-left: 25rem;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home;
