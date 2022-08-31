import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  getApi } from "./api/utils";
import NewTodosForm from "./components/NewTodo";
import Todo from "./components/Todo";
import Todos from "./models/todo";
import { addTodo } from "./store/action";

function App() {
  const [newTodo, setNewTodo] = useState<Todos[]>([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const addTodoHandler = (todoText: string) => {
    const todos = new Todos(todoText, Math.random() * 100);
    setNewTodo((currentState) => {
      return currentState.concat(todos);
    });
    dispatch(addTodo(todos));
    getApi(setIsLoading);
  };
  const removeTodoHandler = (todoID: number) => {
    getApi(setIsLoading);
  };
  return (
    <div className="App">
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <>
          {" "}
          <NewTodosForm onAddTodo={addTodoHandler} />
          <Todo items={newTodo} removeTodo={removeTodoHandler} />
        </>
      )}
    </div>
  );
}

export default App;
