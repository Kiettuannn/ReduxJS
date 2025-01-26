import { completedTodo, deleteTodo, undoTodo } from "../../actions/todo";
import "./Todo.scss";
import {useDispatch, useSelector} from 'react-redux'
function TodoList(){
  const todoList = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();
  return(
    <>
      {todoList &&(
        <ul className="todo__list">
          {todoList.map(item => (
            <li className="todo__item" key={item.id}>
              <span className={"todo__content " + (item.completed && "todo__content--completed")}>
                {item.content}
              </span>
              {item.completed? (
                <button onClick={() => dispatch(undoTodo(item.id))}>U</button>
              ) :(
                <button onClick={() => dispatch(completedTodo(item.id))}>V</button>
              )}
              <button onClick={() => dispatch(deleteTodo(item.id))}>X</button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
export default TodoList;