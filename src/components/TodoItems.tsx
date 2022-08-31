import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/action";
import style from "../style/Todoitem.module.css";
const TodoItems: React.FC<{
  text: string;
  id: number;
  objectKey: any;
  index: number;
  removeTodo: (todoID: number) => void;
}> = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = (todoId: string) => {
    props.removeTodo(2)
    dispatch(removeTodo(todoId));
  };
  return (
    <>
      <li
        className={style.item}
        onClick={() => deleteHandler(props.objectKey[props.index])}
        key={props.id}
      >
        {props.text}
      </li>
    </>
  );
};

export default TodoItems;
