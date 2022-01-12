import React from "react";
import "./styles.css";
import { useState } from "react";
import { Timer } from "./components/Timer";
import { Stopwatch } from "./components/Stopwatch";

export default function App() {
  const [isTimer, setIsTimer] = useState(false);
  const getStopwatch = () => {
    setIsTimer(!isTimer);
  };
  return (
    <div className="App">
      <div>{isTimer ? <Timer /> : <Stopwatch />}</div>
      <div>
        <br />
        <input
          id="togglebtn"
          onClick={getStopwatch}
          type="submit"
          value={isTimer ? "Stopwatch" : "Timer"}
        />
      </div>
    </div>
  );
}
