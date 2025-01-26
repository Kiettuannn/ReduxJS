import { useDispatch } from "react-redux";
import { createTodo } from "../../actions/todo";
import { useRef } from "react";

function TodoInput(){
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const valueInput = e.target.content.value;
    if(valueInput !== ""){
      dispatch(createTodo(valueInput));
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }
  return(
    <>
      <div className="todo__input">
        <form onSubmit={handleSubmit} className="todo__input--form">
          <input placeholder="Add a new task" className="todo__input--textBox" ref={inputRef} name="content"></input>
          <button className="todo__input--submit" type="submit">+</button>
        </form>
      </div>
    </>
  )
}
export default TodoInput;