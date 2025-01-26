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
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} name="content"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
export default TodoInput;