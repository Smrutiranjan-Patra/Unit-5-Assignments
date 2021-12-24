import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const multi = () => {
    setCount(count * 2);
  };

  const changeCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1 className="counter">Counter : {count}</h1>
      <button onClick={() => changeCount(1)}>Increase</button>
      <button onClick={() => changeCount(-1)}>Decrease</button>
      <button onClick={multi}>Double</button>
    </div>
  );
}

export default App;
