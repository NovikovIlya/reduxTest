import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toogleCompletedTodo: (state, action) => {
      const toogleTodo = state.todos.find((todo) => todo.id === action.payload);
      toogleTodo.completed = !toogleTodo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
    },
  },
});

export const { addTodo, toogleCompletedTodo,removeTodo  } = todosSlice.actions;
export default todosSlice.reducer;
