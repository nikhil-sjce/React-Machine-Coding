import "./styles.css";
import React from "react";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [name, setName] = useLocalStorage("name", "initialValue");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <label>Enter Name </label>
      <input
        value={name}
        name="name"
        placeholder="enter name"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
