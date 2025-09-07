import React, { createContext, useContext } from "react";

export const ExpenseContext = createContext({
  expenses: [
    {
      id: 1,
      category: "food",
      expense: "pizza",
      cost: 100,
    },
  ],
  addExpense: () => {},
  deleteExpense: (id) => {},
  editExpense: (id, expense) => {},
});

export const useExpense = () => {
  return useContext(ExpenseContext);
};

export const ExpenseProvider = ExpenseContext.Provider;
