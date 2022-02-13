import Button from "./Button";
import styles from "./App.module.css";
import React from "react";
import { useState, useEffect } from "react";

function Content() {
  useEffect(() => {
    console.log("Created");
    return () => console.log("Destroyed");
  }, []);
  return (
    <h1>Content when showing is True</h1>
  )
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((prev) => prev + 1);
  const onShow = () => setShowing((prev) => !prev);
  const onChange = (event) => {setKeyword(event.target.value)};

  // console.log("run all the time");
  useEffect(() => {
    console.log("run only once.");
  }, []);

  useEffect(() => {
    console.log("run only 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("run only 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("run only 'keyword' & 'counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <button onClick={onShow}>{showing ? "Hide" : "Show" }</button>
      {showing ? <Content /> : null}
      <input value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..."/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click here</button>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
