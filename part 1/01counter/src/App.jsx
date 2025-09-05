import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const onCountAddChanger = () => {
    setCount((prevCount) => {
      if (prevCount === 10) {
        alert("Limit Reached");
        return prevCount; // don't increase
      }
      return prevCount + 1;
    });
  };

  const onCountRemoveChanger = () => {
    setCount((prevCount) => {
      if (prevCount === 0) {
        alert("Limit Reached");
        return prevCount; // don't decrease
      }
      return prevCount - 1;
    });
  };

  return (
    <>
      <h2>{count}</h2>
      <button type="button" className="count" onClick={onCountAddChanger}>
        Add
      </button>
      <button type="button" className="count" onClick={onCountRemoveChanger}>
        Remove
      </button>
    </>
  );
}

export default App;
