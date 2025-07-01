import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const intervalRef = useRef(null);

  const handleButtonClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(intervalRef.current); // stop when reaching 0
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current); // cleanup
  }, []); // run only once on mount

  return (
    <div className="App">
      <h1>{count}</h1>
      <h3>Time left: {timeLeft} seconds</h3>
      {timeLeft > 0 && <button onClick={handleButtonClick}>+</button>}
    </div>
  );
}
