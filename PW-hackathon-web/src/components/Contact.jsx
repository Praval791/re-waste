import React, { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { contactAnimation } from "animation";

function Contact() {
  const [element, controls] = useScroll();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [category, setCategory] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, address, mobile, category, model, description };
    try {
      const res = await fetch("https://pwh.onrender.com/api/v1/scrap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      console.log(json);
      // reset form data
      setName("");
      setAddress("");
      setMobile("");
      setCategory("");
      setModel("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Section id="contact" ref={element}>
      <Title value="contact" />
      <motion.div
        className="contact"
        variants={contactAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <div className="contact__title">
          <p>Schedule a pickup</p>
          <h2>Quick registration</h2>
        </div>
        <div className="contact__data">
          <div className="contact_data_description">
            <h4>Just to say hi !!</h4>
            <p>
              If you have any questions simply use the following contact
              details.
            </p>
            <p>
              Welcome to our device buyback program, where we offer a
              hassle-free way for customers to sell their old electronics for
              cash. Our team of experts carefully evaluates each device and
              offers a fair market value price for it, providing a convenient
              and sustainable way to dispose of unwanted electronics.
            </p>
            <div>
              <p>
                <strong>Address:</strong> 307 Vidhyut Nagar Ajmer Road Jaipur
              </p>
              <p>
                <strong>Email:</strong> priyankmehta6777@gmail.com
              </p>
              <p>
                <strong>Website:</strong> www.re-waste.com
              </p>
            </div>
          </div>
          <div className="contact_data_form">
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Mobile No."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="text"
              placeholder="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button onClick={handleSubmit}>Send Message</button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 18rem;
    &__title {
      margin: 6rem 0 2rem 0;
      p {
        text-transform: uppercase;
        color: var(--primary-color);
      }
      h2 {
        font-size: 2rem;
        color: var(--secondary-color);
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      .contact_data_description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          text-align: justify;
          margin-top: 20px;
        }
        div {
          p {
            strong {
              text-transform: uppercase;
            }
          }
        }
      }
      .contact_data_form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          width: 100%;
          color: var(--secondary-color);
          padding-bottom: 0.7rem;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: var(--secondary-color);
          }
        }
        textarea {
          width: 100%;
          height: 50%;
          resize: none;
          border-bottom: none !important;
        }
        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 5rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background-color: var(--secondary-color);
            color: #fff;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      margin: 1rem;
      padding: 0 1rem;
      &__title {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &__data {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
        &__form {
          button {
            height: 6rem;
          }
        }
      }
    }
  }
`;

export default Contact;
