import { completedTodo, deleteTodo, undoTodo } from "../../actions/todo";
import "./Todo.scss";
import {useDispatch, useSelector} from 'react-redux'
import { AiOutlineUndo } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


function TodoList(){
  const todoList = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();
  return(
    <>
      {todoList &&(
        <div className="todo__list">
          {todoList.map(item => (
            <div className="todo__item" key={item.id}>
              <span className={"todo__content " + (item.completed && "todo__content--completed")}>
                {item.content}
              </span>
              <div className="todo__button">
                {item.completed? (
                  <button className="todo__button--undo" onClick={() => dispatch(undoTodo(item.id))}>
                    <div>
                      <AiOutlineUndo />
                    </div>
                  </button>
                ) :(
                  <button className="todo__button--completed" onClick={() => dispatch(completedTodo(item.id))}>
                    <div>
                      <FaCheck />
                    </div>
                  </button>
                )}
                <button className="todo__button--delete" onClick={() => dispatch(deleteTodo(item.id))}>
                  <div>
                    <MdDeleteForever />
                  </div>
                  </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
export default TodoList;