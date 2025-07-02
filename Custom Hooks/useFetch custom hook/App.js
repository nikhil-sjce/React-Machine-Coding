import React, { useState, useEffect } from "react";
import "./styles.css";
import useFetch from "./useFetch";

/*
  Instructions:
    Implement the `useFetch` function. 
*/

const App = () => {
  const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
  const [response, setUrl, error] = useFetch("");

  const handleButtonClick = () => {
    if (apiUrl) {
      setUrl(apiUrl);
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data Received</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="submit"
          style={{ textAlign: "center" }}
          onClick={() => handleButtonClick()}
        >
          GET API DATA
        </button>
      </div>
      {response &&
        response.map((arrayElement) => (
          <div key={arrayElement.id}>
            <h1>{arrayElement.title}</h1>
            <p>{arrayElement.body}</p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default App;
