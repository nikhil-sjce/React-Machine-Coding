import "./styles.css";
import { useState, useEffect } from "react";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [list, setList] = useState(["list1", "list2"]);
  const [inputText, setInputText] = useState("");

  const addCities = () => {
    //Complete function
    setList([...list, inputText]);
    setInputText("");
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleDelete = (indexToDelete) => {
    const updatedList = list.filter((_, index) => index !== indexToDelete);
    setList(updatedList);
  };

  return (
    <div className="App">
      <div style={{ marginBottom: "20px" }}>
        <input
          value={inputText}
          onChange={(e) => handleInput(e)}
          placeholder="Add City"
        ></input>
        <span style={{ marginLeft: "20px" }}>
          <button onClick={() => addCities()}>Add</button>
        </span>
      </div>
      {list.map((element, index) => {
        return (
          <>
            <li key={index} style={{ marginBottom: "20px" }}>
              {element}
              <button
                onClick={() => handleDelete(index)}
                style={{ marginLeft: "20px" }}
              >
                X
              </button>
            </li>
          </>
        );
      })}
    </div>
  );
}
