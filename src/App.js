import React, { useState, useEffect } from "react";
import { animated, useSpring, config } from "react-spring";
import "./App.css";
import Button from "./components/Button";
import firebase from "./config/firebaseConfig";

function App() {
  // database
  let databaseRef = firebase.database().ref("/buttonValue");
  const animTitle = useSpring({
    from: {
      opacity: 0,
      fontSize: 0,
    },
    to: {
      opacity: 1,
      fontSize: 100,
      color: "#3d405b",
      fontFamily: "Press Start 2P",
    },
    config: config.gentle,
  });
  const [times, setTimes] = useState(null);
  useEffect(() => {
    databaseRef.on("value", (snap) => updateButtonValue(snap.val()));
    return () => {
      databaseRef.off();
    };
  }, []);

  // FUNCTIONS
  const updateButtonValue = async (value) => {
    setTimes(value);
  };
  return (
    <div className="App">
      <animated.h1 style={animTitle}>
        Make the 🐢 fuck {times ? times : "⏳"} times
      </animated.h1>
      <Button setTimes={setTimes} times={times} />
    </div>
  );
}

export default App;
