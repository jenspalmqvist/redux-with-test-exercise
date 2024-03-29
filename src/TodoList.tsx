import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, sortTodos } from "./todoSlice";

type Todo = {
  id: string;
  text: string;
};

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo.todos);
  const [newTodoText, setNewTodoText] = useState<string>("");
  const [filterDescending, setFilterDescending] = useState<boolean>(false);

  const add = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(newTodoText));
    setNewTodoText("");
  };

  const removeTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const sort = (desc: boolean) => {
    dispatch(sortTodos(desc));
  };

  return (
    <>
      <form onSubmit={add}>
        <input
          placeholder="Skriv en todo..."
          onChange={(event) => setNewTodoText(event.target.value)}
          value={newTodoText}
        ></input>
        <button type="submit" disabled={newTodoText.length === 0}>
          Lägg till
        </button>
      </form>
      <h2>
        Todo
        <button
          onClick={() => {
            setFilterDescending(!filterDescending);
            sort(filterDescending);
          }}
        >
          {filterDescending ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      </h2>

      {todos && todos.length ? (
        <ul>
          {todos.map((todo: any) => (
            <li key={todo.id}>
              {todo.text}{" "}
              <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Du har inga todos</p>
      )}
    </>
  );
};

export default TodoList;
