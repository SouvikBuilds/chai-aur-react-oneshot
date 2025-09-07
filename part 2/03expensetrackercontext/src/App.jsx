import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ExpenseProvider } from "./contexts/ExpenseContext";
import "./App.css";
import Container from "./components/Container";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, { id: Date.now(), ...expense }]);
  };

  const deleteExpense = (id) => {
    if (confirm("Are you sure you want to delete this expense?")) {
      setExpenses((prev) =>
        prev.filter((prevExpense) => prevExpense.id !== id)
      );
    } else {
      return;
    }
  };

  const editExpense = (id, expense) => {
    if (confirm("Are you sure you want to edit this expense?")) {
      setExpenses((prev) =>
        prev.map((prevExpense) =>
          prevExpense.id === id ? expense : prevExpense
        )
      );
    } else {
      return;
    }
  };

  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem("expenses"));

    if (expenses && expenses.length > 0) setExpenses(expenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <ExpenseProvider
      value={{ expenses, addExpense, deleteExpense, editExpense }}
    >
      <div className="mt-[5%]">
        <Container />
      </div>
    </ExpenseProvider>
  );
}

export default App;
