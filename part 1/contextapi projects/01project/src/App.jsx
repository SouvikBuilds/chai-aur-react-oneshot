import React, { useContext } from "react";
import Countcontext from "./context/countcontext";
import "./App.css";
import CountcontextProvider from "./context/CounterContextProvider";

function AppContent() {
  const { count, setCount } = useContext(Countcontext);

  const addCount = () => setCount((prev) => (prev < 20 ? prev + 1 : prev));

  const removeCount = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="mt-[100px] flex flex-col items-center justify-center gap-10">
      <h1 className="text-red-500 text-6xl text-center">Count: {count}</h1>

      <div className="buttonSection flex flex-row items-center justify-center gap-6 mx-auto my-auto">
        <button
          type="button"
          className="px-5 py-2 rounded-lg shadow-lg bg-[#333] text-white duration-300 active:bg-black cursor-pointer"
          onClick={addCount}
        >
          Add
        </button>
        <button
          type="button"
          className="px-5 py-2 rounded-lg shadow-lg bg-[#333] text-white duration-300 active:bg-black cursor-pointer"
          onClick={removeCount}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <CountcontextProvider>
      <AppContent />
    </CountcontextProvider>
  );
}

export default App;
