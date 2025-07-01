import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const selectUsername = (e) => {
    setUserName(e.target.value);
  };
  const selectFullname = (e) => {
    setFullName(e.target.value);
  };
  const selectAge = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmit === false) {
      setIsSubmit(!isSubmit);
    }
  };
  return (
    <div className="App">
      <form>
        <label>User Name</label>
        <input
          onChange={(e) => {
            selectUsername(e);
          }}
          placeholder="Enter userName"
        ></input>
        <br />
        <label>Full Name</label>
        <input
          onChange={(e) => {
            selectFullname(e);
          }}
          placeholder="Enter fullName"
        ></input>
        <br />
        <label>Age</label>
        <input
          onChange={(e) => {
            selectAge(e);
          }}
          type="number"
          placeholder="Enter Age"
        ></input>
        <br />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
      {isSubmit ? (
        <>
          <h1>Request sent to DB with below request data.</h1>
          <h4>userName : {userName}</h4>
          <h4>fullName : {fullName}</h4>
          <h4>ageName : {age}</h4>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
