import { createSlice, nanoid } from "@reduxjs/toolkit";

// LocalStorage se todos load karne ka helper
const loadTodos = () => {
  try {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  } catch (e) {
    console.error("Error loading todos:", e);
    return [];
  }
};

// LocalStorage me todos save karne ka helper
const saveTodos = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (e) {
    console.error("Error saving todos:", e);
  }
};

const initialState = {
  todos: loadTodos().length
    ? loadTodos()
    : [
        {
          id: 1,
          text: "",
          completed: false,
        },
      ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        completed: false,
      };
      state.todos.push(todo);
      saveTodos(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      saveTodos(state.todos);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      saveTodos(state.todos);
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      saveTodos(state.todos);
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleComplete } =
  todoSlice.actions;
export default todoSlice.reducer;
