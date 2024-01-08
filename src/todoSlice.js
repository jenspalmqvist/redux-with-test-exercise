import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id:
          state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        text: action.payload,
      });
    },
    deleteTodo: (state, action) => {
      const newState = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      return newState;
    },
    sortTodos: (state, action) => {
      state.todos.sort(
        (a, b) => (action.payload ? 1 : -1) * a.text.localeCompare(b.text)
      );
    },
  },
});

export const { addTodo, deleteTodo, sortTodos } = todoSlice.actions;

export default todoSlice.reducer;
