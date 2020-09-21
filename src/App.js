import React, { useState } from "react";
import { animated, useSpring, config } from "react-spring";
import "./App.css";
import Button from "./components/Button";

function App() {
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
  const [times, setTimes] = useState(0);

  return (
    <div className="App">
      <animated.h1 style={animTitle}>
        Make the tutle fuck {times} times 🙃
      </animated.h1>
      <Button setTimes={setTimes} times={times} />
    </div>
  );
}

export default App;
