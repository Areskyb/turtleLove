import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring } from "react-spring";
import firebase from "../config/firebaseConfig";

function Button({ setTimes, times }) {
  // FUNCTIONS
  const triggerTurtleSound = async () => {
    if (disabled) return;
    audio.play();
    setDisabled(true);
    await setTimeout(() => setDisabled(false), 1400);
    setTimes((prev) => prev + 1);
    increaseValueToButton();
  };
  const increaseValueToButton = async () => {
    let databaseRef = firebase.database().ref("/buttonValue");
    await databaseRef.set(times + 1);
  };

  // USE EFFECT
  useEffect(() => {
    let sound = new Audio("http://peal.io/download/0kh9r");
    setAudio(sound);
    return () => {};
  }, []);

  // STATE
  const [audio, setAudio] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const ButtonBackground = styled.button`
    background: ${!disabled ? "#e07a5f" : "#C2BFB0"};
    height: 10%;
    width: 20%;
    border-radius: 20px;
    outline: none;
    border: none;
  `;
  return (
    <div>
      <ButtonBackground onClick={() => triggerTurtleSound()}>
        <ButtonText>🐢 👉👌 🐢</ButtonText>
        {disabled ? (
          <img
            style={{ borderRadius: 10, width: 150, height: 150 }}
            src="https://i.makeagif.com/media/2-15-2017/4CwzYn.gif"
          />
        ) : null}
      </ButtonBackground>
    </div>
  );
}
export default Button;
const ButtonText = styled.h2`
  font-size: 40px;
  color: #3d410z;
`;
