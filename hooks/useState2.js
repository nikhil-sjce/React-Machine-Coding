import { useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(true);

  const handleButtonClick = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: "purple",
          color: "white",
          display: "absolute",
        }}
      >
        Show/Hide
      </button>
      {show ? (
        <span style={{ marginLeft: "20px" }}>Welcome to react challenges</span>
      ) : (
        ""
      )}
    </div>
  );
}
