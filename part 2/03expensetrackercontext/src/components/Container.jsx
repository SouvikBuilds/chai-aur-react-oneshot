import React, { useEffect, useState } from "react";
import { useExpense } from "../contexts/ExpenseContext";

const Container = () => {
  const { expenses, addExpense, deleteExpense, editExpense } = useExpense();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleTotal = () => {
    let total = 0;
    expenses.forEach((exp) => {
      total += exp.amount;
    });
    setTotalExpense(total);
  };
  useEffect(() => {
    handleTotal();
  }, [expenses]);
  const add = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    if (isEditing) {
      editExpense(editId, {
        id: editId,
        name,
        category,
        amount: Number(amount),
      });
      setIsEditing(false);
      setEditId(null);
    } else {
      addExpense({ id: Date.now(), name, category, amount: Number(amount) });
    }

    reset();
  };

  const reset = () => {
    setName("");
    setCategory("Food");
    setAmount("");
  };

  const startEdit = (exp) => {
    setName(exp.name);
    setCategory(exp.category);
    setAmount(exp.amount);
    setEditId(exp.id);
    setIsEditing(true);
  };

  return (
    <div className="container w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] bg-black text-white p-3 sm:p-5 mx-auto my-auto rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 sm:gap-6">
      <h1 className="heading text-xl sm:text-2xl md:text-3xl animate-bounce text-center text-white">
        Manage Your Expenses
      </h1>

      {/* FORM */}
      <form
        onSubmit={add}
        className="formGroup flex flex-col justify-center items-center gap-4 sm:gap-6 w-full"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 sm:px-5 py-2 rounded-lg shadow-lg text-white w-full max-w-[500px] border border-white bg-transparent"
          placeholder="Enter Expense Name"
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 sm:px-5 py-2 rounded-lg shadow-lg text-white w-full max-w-[500px] border border-white bg-transparent"
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Sports">Sports</option>
          <option value="Fashion">Fashion</option>
          <option value="Others">Others</option>
        </select>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-3 sm:px-5 py-2 rounded-lg shadow-lg text-white w-full max-w-[500px] border border-white bg-transparent"
          placeholder="Enter Expense Amount"
          required
        />

        <div className="buttonSection flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <button
            type="submit"
            className="px-4 sm:px-5 py-2 rounded-lg text-white bg-red-500 shadow-lg active:bg-red-600 duration-300 cursor-pointer w-full sm:w-auto"
          >
            {isEditing ? "Edit Expense" : "Add Expense"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="px-4 sm:px-5 py-2 rounded-lg text-white bg-blue-500 shadow-lg active:bg-indigo-600 duration-300 cursor-pointer w-full sm:w-auto"
          >
            Reset Data
          </button>
        </div>
      </form>

      {/* TABLE */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] text-left border-collapse mt-4 sm:mt-6">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-2 sm:px-6 py-3 border-b border-gray-700 text-sm sm:text-base">
                Serial No
              </th>
              <th className="px-2 sm:px-6 py-3 border-b border-gray-700 text-sm sm:text-base">
                Expense Name
              </th>
              <th className="px-2 sm:px-6 py-3 border-b border-gray-700 text-sm sm:text-base">
                Category
              </th>
              <th className="px-2 sm:px-6 py-3 border-b border-gray-700 text-sm sm:text-base">
                Amount
              </th>
              <th className="px-2 sm:px-6 py-3 border-b border-gray-700 text-sm sm:text-base">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-4 text-gray-400 text-sm sm:text-base"
                >
                  No expenses added yet.
                </td>
              </tr>
            ) : (
              expenses.map((exp, index) => (
                <tr
                  key={exp.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                  } hover:bg-gray-700 transition`}
                >
                  <td className="px-2 sm:px-6 py-3 border-b border-gray-700 text-sm sm:text-base">
                    {index + 1}
                  </td>
                  <td className="px-2 sm:px-6 py-3 border-b border-gray-700 text-sm sm:text-base">
                    {exp.name}
                  </td>
                  <td className="px-2 sm:px-6 py-3 border-b border-gray-700 text-sm sm:text-base">
                    {exp.category}
                  </td>
                  <td className="px-2 sm:px-6 py-3 border-b border-gray-700 text-sm sm:text-base">
                    ₹{exp.amount}
                  </td>
                  <td className="px-2 sm:px-6 py-3 border-b border-gray-700">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
                      <button
                        onClick={() => deleteExpense(exp.id)}
                        className="bg-red-500 active:bg-red-600 duration-300 text-white px-2 sm:px-3 py-1 rounded-lg shadow-md text-xs sm:text-sm w-full sm:w-auto"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => startEdit(exp)}
                        className="bg-green-500 active:bg-green-600 duration-300 text-white px-2 sm:px-3 py-1 rounded-lg shadow-md text-xs sm:text-sm w-full sm:w-auto"
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Total Amount Section */}

      <h1 className="text-4xl text-white font-semibold">
        Total: ₹{totalExpense}
      </h1>
    </div>
  );
};

export default Container;
