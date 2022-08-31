import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getApi } from "./api/utils";
import NewTodosForm from "./components/NewTodo";
import Todo from "./components/Todo";
import Todos from "./models/todo";
import { addTodo } from "./store/action";
import style from '../src/style/Todos.module.css'
function App() {
  const [newTodo, setNewTodo] = useState<Todos[]>([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
 const [message , setMessage] = useState("")
  const addTodoHandler = (todoText: string) => {
    const todos = new Todos(todoText, Math.random() * 100);
    setNewTodo((currentState) => {
      return currentState.concat(todos);
    });
    dispatch(addTodo(todos));
    getApi(setIsLoading);
    setMessage("Adding...")
  };
  const removeTodoHandler = (todoID: number) => {
    getApi(setIsLoading);
    setMessage("Removing...")
  };
  return (
    <div className="App">
      {" "}
      <NewTodosForm onAddTodo={addTodoHandler} />
      {isLoading ? (
        <div  className={style.todos}>{message}</div>
      ) : (
        <Todo items={newTodo} removeTodo={removeTodoHandler} />
      )}
    </div>
  );
}

export default App;
