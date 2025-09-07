import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleComplete,
} from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

const TodoItem = ({ todo, dispatch }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.text);

  const editTodo = () => {
    dispatch(updateTodo({ id: todo.id, text: todoMsg }));
    setIsTodoEditable(false);
  };

  const deleteTodo = (id) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 
        ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => dispatch(toggleComplete({ id: todo.id }))}
      />

      {/* Text Input */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg transition-colors duration-200
    ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}
    ${
      todo.completed
        ? "line-through text-green-800"
        : "text-indigo-700 font-medium hover:text-indigo-900"
    }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit / Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center 
        bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center 
        bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default Todos;
