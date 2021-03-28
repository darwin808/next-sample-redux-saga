import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { adder, addpeople, requestPeople, userInput } from "../store/Store";
import React, { useState } from "react";

export default function Home() {
  const [name, setname] = useState("");
  const dispatch = useDispatch();
  const counter = useSelector((e) => e.CounterReducer);
  const User = useSelector((e) => e.UserReducer.user);
  const UserInput = useSelector((e) => e.UserInputReducer);
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addpeople({ UserInput, id: Math.random() }));
  };
  return (
    <div className={styles.container}>
      <h1>hello</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(adder())}>add</button>

      <form action="submit" onSubmit={handlesubmit}>
        <input
          type="text"
          value={UserInput}
          onChange={(e) => dispatch(userInput(e.target.value))}
        />
      </form>
      {UserInput}

      <button onClick={() => dispatch(requestPeople())}>add people</button>
      {JSON.stringify(User)}
    </div>
  );
}
