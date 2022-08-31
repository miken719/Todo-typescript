import { useRef } from "react";
import style from "../style/newTodo.module.css"
const NewTodosForm: React.FC<{onAddTodo : (text: string) => void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enterdText = todoTextInputRef.current!.value

    if(enterdText?.trim().length === 0) {
        return
    }
    props.onAddTodo(enterdText)
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="text">Add Todos</label>
      <input type="text" id="text" ref={todoTextInputRef} />
    </form>
  );
};
export default NewTodosForm;
