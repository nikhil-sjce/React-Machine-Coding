import React, { useState } from "react";
import "./styles.css";
import ProgressBar from "./ProgressBar";

/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [progressValue, setProgressValue] = useState(0);
  const setValuer = (e) => {
    if (
      e.target.value >= 0 &&
      e.target.value <= 100 &&
      e.target.value !== "-"
    ) {
      setProgressValue(e.target.value);
    }
  };

  const preventInvalidCharacter = (e) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={progressValue} />
        <form>
          <label for="html">Input Percentage:</label>
          <input
            max={100}
            min={1}
            type="number"
            value={progressValue}
            onChange={(e) => setValuer(e)}
            onKeyDown={(e) => preventInvalidCharacter(e)}
          />
        </form>
      </div>
    </>
  );
}
