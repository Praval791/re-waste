import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AiFillRobot } from "react-icons/ai";
import { BiSend } from "react-icons/bi";

import "./Bot.css";

function Bot() {
  const [visible, setVisible] = useState(true);
  const [showBotUI, setShowBotUI] = useState(false);

  const handleClick = () => {
    setVisible(true);
    setShowBotUI((e) => !e);
  };

  return (
    <Div>
      {showBotUI && <BotUI />}
      <button
        className={`botButton ${visible ? "block" : "none"}`}
        onClick={handleClick}
      >
        <AiFillRobot />
      </button>
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  .botButton {
    position: fixed;
    bottom: 40px;
    right: 100px;
    background-color: var(--secondary-color);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99 !important;
    transition: 0.4s ease-in-out;
    background-color: black;
    svg {
      color: white;

      font-size: 1.3rem;
    }
  }
`;

const BotUI = () => {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const first = useRef(null);

  const handleClick = () => {
    if (message)
      setAllMessages([...allMessages, { msg: message, sendBy: "user" }]);

    // send request to bot
    setMessage("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  useEffect(() => {
    first.current.scrollTop = first.current?.scrollHeight;
  }, [allMessages.length]);

  return (
    <div className="Bot">
      <div className="top" ref={first}>
        <div className="individualMessage bot">Hey</div>
        <div className="individualMessage bot">Hey how can i help you</div>
        <div className="individualMessage">Nothing! I'm just testing you</div>
        <div className="individualMessage bot">
          Ok! Just let me know if you have any query
        </div>
        {allMessages.map(({ msg, sendBy }, idx) => (
          <div className={`individualMessage ${sendBy}`} key={idx}>
            {msg}
          </div>
        ))}
      </div>
      <div className="bottom">
        <input
          placeholder="How can I help You?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        ></input>
        <button
          style={{ backgroundColor: "white", border: "none" }}
          onClick={handleClick}
        >
          <BiSend style={{ color: "black" }} />
        </button>
      </div>
    </div>
  );
};

export default Bot;
