import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  let Id = 0;
  const startTimer = () => {
    // Complete this function
    id = setInterval(() => {
      setTimer((prevValue) => {
        if (prevValue === 60) {
          return 1;
        } else {
          return prevValue + 1;
        }
      });
    }, 1000);
  };
  const stopTimer = () => {
    // Complete this function
    clearInterval(id);
  };
  const resetTimer = () => {
    // Complete this function
    setTimer(0);
    setTimerMinutes(0);
    clearInterval(id);
  };
  useEffect(() => {
    if (timer === 60) {
      setTimerMinutes((prev) => {
        return prev + 1;
      });
    }
  }, [timer]);
  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {timerMinutes} mins </span>
      <span> {timer === 60 ? 0 : timer} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
