import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube, BsBehance } from "react-icons/bs";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { footerTextAnimation } from "animation";
import play from "assets/play.png";

function Footer() {
  const [element, controls] = useScroll();
  return (
    <Foot ref={element}>
      <motion.span
        variants={footerTextAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        <img src={play} alt="" className="greenFilter" />

        <p style={{ marginTop: "1rem" }}>
          At our e-waste management startup, we're passionate about protecting
          the environment while helping individuals and businesses dispose of
          their electronic devices in an eco-friendly way. Join us on our
          mission to create a more sustainable future for generations to come.
        </p>
      </motion.span>
      <motion.div
        className="footer__social__icons"
        variants={footerTextAnimation}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
        <BsBehance />
      </motion.div>
    </Foot>
  );
}

const Foot = styled(motion.footer)`
  background-color: var(--primary-color);
  color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  padding: 5rem 10rem;
  .footer__social__icons {
    display: flex;
    gap: 2rem;
    svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

export default Footer;
