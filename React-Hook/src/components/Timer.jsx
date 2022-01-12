import React from "react";
import "../styles.css";
import { useState } from "react";

export const Timer = () => {
  const [form, setForm] = useState({});
  const secRef = React.useRef();
  const [isTimer, setIsTimer] = React.useState(false);
  const [isTimerRunning, setIsTimerRinning] = React.useState(false);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  if (seconds <= 0) {
    setMinutes((prev) => prev - 1);
    setSeconds(59);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { min, sec } = form;

    if (sec > 0 || min > 0) {
      setIsTimer(true);
      start();
    }
  };

  const stopTimer = () => {
    setForm({
      min: minutes,
      sec: seconds
    });
    clearInterval(secRef.current);
    setIsTimerRinning(false);
  };
  const start = () => {
    if (isTimerRunning) {
      return stopTimer();
    }
    setIsTimerRinning(true);
    let { min, sec } = form;
    if (!min) min = 0;
    if (!sec) sec = 0;
    if (sec < 6) sec = sec * 10;
    if (sec > 59) {
      min = +min + Math.floor(+sec / 60);
      sec = Math.floor(+sec % 60);
    }
    setMinutes(min);
    setSeconds(sec);

    secRef.current = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
  };

  const reset = () => {
    clearInterval(secRef.current);
    setIsTimer(false);
    setIsTimerRinning(false);
  };
  if (+seconds <= 0 && +minutes <= 0) {
    reset();
  }

  return !isTimer ? (
    <div className="App">
      <h1>Timer</h1>
      <form onSubmit={handleSubmit}>
        <input name="min" onChange={handleChange} placeholder="MM" />
        <input name="sec" onChange={handleChange} placeholder="SS" />
        <input id="subbtn" type="submit" value="submit" />
      </form>
    </div>
  ) : (
    <div className="App">
      <h2 id="show">
        {minutes}-{seconds}
      </h2>
      <button onClick={start}>
        {isTimerRunning === true ? "Stop" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
