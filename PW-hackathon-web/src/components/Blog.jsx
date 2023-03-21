import React from "react";
import styled from "styled-components";
import play from "assets/play.png";
import reduce from "assets/reduce.jpg";
import recycle from "assets/recycle.jpg";
import reuse from "assets/reuse.jpg";
import Title from "./Title";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimation } from "animation";

function Blog() {
  const [element, controls] = useScroll();
  const blogsData = [
    {
      title: "Waste Minimisation",
      type: "Reduce",
      description:
        "Reducing the amount of waste produced in the first place. This can be achieved by using products that have minimal packaging, purchasing items in bulk, or using reusable products instead of disposable ones.",
      link: "https://en.wikipedia.org/wiki/Waste_minimisation#:~:text=By%20reducing%20or%20eliminating%20the,patterns%20of%20consumption%20and%20production.",
      img: reduce,
    },
    {
      title: "Waste Reclamation",
      type: "Recycle",
      description:
        "Converting waste materials into new products. Recycling can be achieved by separating recyclable materials from non-recyclable ones, and then sending them to recycling centers where they can be processed and turned into new products.",
      link: "https://en.wikipedia.org/wiki/Recycling",
      img: recycle,
    },
    {
      title: "Waste Reutilize",
      type: "Reuse",
      description:
        "Finding new ways to use items that would otherwise be discarded. This can be achieved by repairing items instead of throwing them away, donating items to charity, or using refillable containers instead of buying new ones.",
      link: "https://en.wikipedia.org/wiki/Reuse",
      img: reuse,
    },
  ];
  return (
    <Section id="blog" ref={element}>
      <Title value="Blog" />
      <div className="blogs">
        {blogsData.map(({ title, type, description, link, img }, index) => {
          return (
            <motion.div
              className="blog"
              variants={blogsAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              key={index}
            >
              <img className="image" src={img} alt={type}></img>
              <div className="title">
                <h3>{title}</h3>
              </div>
              <span className="type">{type}</span>
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="more">
                <img src={play} className="greenFilter" alt="Play" />
                <a href={link}>Read More</a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 15rem;
    .blog {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .image {
        height: 18rem;
        object-fit: scale-down;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        :hover {
          transform: scaleX(1.2);
          transform: scaleY(1.1);
          box-shadow: 3px 3px 6px black;
        }
      }
      .title {
        h3 {
          color: var(--secondary-color);
          font-size: 1.5rem;
        }
      }
      .type {
        color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase;
      }
      .description {
        height: 10rem;
        color: var(--primary-color);
      }
      .more {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        a {
          letter-spacing: 0.1rem;
          text-decoration: none;
          text-transform: uppercase;
          color: var(--primary-color);
        }
        a:hover {
          color: var(--secondary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 0;
    .blogs {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
  }
`;

export default Blog;
