import React from "react";
import "../styles.css";

export const Stopwatch = () => {
  const [time, setTime] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const timeRef = React.useRef();

  if (time === 100) {
    setSecond((prev) => prev + 1);
    setTime(0);
  }

  const startTime = () => {
    if (isRunning) {
      return stopTimer();
    }
    timeRef.current = setInterval(() => {
      setTime((prev) => +prev + 1);
    }, 10);
    setIsRunning(true);
    return () => {
      clearInterval(timeRef.current);
    };
  };
  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timeRef.current);
  };
  const reset = () => {
    setIsRunning(false);
    clearInterval(timeRef.current);
    setSecond(0);
    setTime(0);
  };
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h2 id="show">
        {second}-{time}
      </h2>
      <button onClick={startTime}>
        {isRunning === true ? "Stop" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
