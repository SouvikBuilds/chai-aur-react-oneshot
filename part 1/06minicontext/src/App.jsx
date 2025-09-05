import { useState } from "react";
import "./App.css";
import UserContext from "./context/UserContext";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React With Chai</h1>
      <div className="section">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
