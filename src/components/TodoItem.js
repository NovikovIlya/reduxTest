import React from 'react';
import { useDispatch } from 'react-redux';
import { toogleCompletedTodo } from '../features/todo/todoSlice';
import { removeTodo } from '../features/todo/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toogleTodoHandler = (id) => {
    dispatch(toogleCompletedTodo(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  if (!todo) {
    return 'нет тудушек';
  }

  console.log(todo);
  return (
    <>
      <div className={`text-sm ${todo ? 'flex justify-between items-center my-2' : 'zzz'}`}>
        <div
          onClick={() => toogleTodoHandler(todo.id)}
          className={`${
            todo.completed ? 'red' : ''
          } text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400`}>
          Complete
        </div>
        <div>{todo ? todo.text : ''}</div>
        <div
          onClick={() => removeTodoHandler(todo.id)}
          className="text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer">
          Delete
        </div>
      </div>
    </>
  );
};

export default TodoItem;
