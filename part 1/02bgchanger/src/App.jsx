import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("olive");

  return (
    <>
      <div
        className="duration-300"
        style={{ backgroundColor: bgColor, height: "100vh" }}
      >
        <div className="app flex flex-row items-center justify-center bg-white shadow-lg rounded-3xl px-5 py-2 w-[40vw] mx-auto my-auto  gap-4">
          <button
            type="button"
            className="px-4 py-2 rounded-3xl shadow-lg bg-red-500 text-white cursor-pointer duration-300 active:bg-red-600 "
            onClick={() => setBgColor("red")}
          >
            Red
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-3xl shadow-lg bg-[#808000] text-white cursor-pointer duration-300 active:bg-[#808001] "
            onClick={() => setBgColor("olive")}
          >
            olive
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-3xl shadow-lg bg-black text-white cursor-pointer duration-300 active:bg-[#333]"
            onClick={() => setBgColor("black")}
          >
            Black
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-3xl shadow-lg bg-purple-500 text-white cursor-pointer duration-300 active:bg-purple-600 "
            onClick={() => setBgColor("purple")}
          >
            Purple
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-3xl shadow-lg bg-gray-500 text-white cursor-pointer duration-300 active:bg-gray-600 "
            onClick={() => setBgColor("gray")}
          >
            Gray
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
