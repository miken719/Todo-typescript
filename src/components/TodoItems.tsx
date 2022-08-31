import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putApi } from "../api/utils";
import { removeTodo } from "../store/action";
import style from "../style/Todoitem.module.css";
const TodoItems: React.FC<{
  text: string;
  id: number;
  objectKey: any;
  index: number;
  removeTodo: (todoID: number) => void;
  updateTodo: (text: string) => void;
}> = (props) => {
  const dispatch = useDispatch();
  const [show, hide] = useState(false);
  const [updatedText, setUpdateData] = useState(props.text);
  const deleteHandler = (todoId: string) => {
    props.removeTodo(2);
    dispatch(removeTodo(todoId));
  };

  const handleUpdate = (text: string) => {
    hide(false);
    putApi(props.objectKey[props.index], updatedText);
    props.updateTodo("updated");
  };
  return (
    <>
      <li className={style.item} key={props.id}>
        {show ? (
          <>
            {" "}
            <input
              value={updatedText}
              defaultValue={props?.text}
              onChange={(e) => setUpdateData(e.target.value)}
            />
            <button
              className={style.itemButton}
              onClick={() => handleUpdate("")}
            >
              Update
            </button>
          </>
        ) : (
          props.text
        )}

        {!show && (
          <button
            className={style.itemButton}
            onClick={() => deleteHandler(props.objectKey[props.index])}
          >
            Delete
          </button>
        )}
        <button className={style.itemButton} onClick={() => hide(!show)}>
          {show ? "Cancel" : "Edit"}
        </button>
      </li>
    </>
  );
};

export default TodoItems;
