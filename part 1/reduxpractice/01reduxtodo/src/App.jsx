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
      <h1 className="text-3xl text-white font-semibold p-5">
        Manage Your Todos
      </h1>
      <AddTodo />
      <div className="mt-5">
        <Todos />
      </div>
    </>
  );
}

export default App;
