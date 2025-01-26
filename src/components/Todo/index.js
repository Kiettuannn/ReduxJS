import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
function Todo(){
  return(
    <>
      <div className="container">
        <div className="todo">
          <div className="todo__header">
            <h1 className="todo__header--title">Todo</h1>
            <div className="todo__header--selectDate">SelectedDate</div>
          </div>
          <TodoInput></TodoInput>
          <TodoList></TodoList>
        </div>
      </div>
    </>
  )
}
export default Todo;