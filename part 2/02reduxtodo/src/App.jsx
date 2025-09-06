import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-3xl text-white font-bold underline text-center p-5 mt-[300px]">
          Learn React Redux Toolkit
        </h1>

        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
