
const init = [
  {
    id:1,
    content: "Cong viec 1",
    completed: true
  },
  {
    id:2,
    content: "Cong viec 2",
    completed: false
  },
  {
    id:3,
    content: "Cong viec 3",
    completed: false
  },
]
const todoReducer = (state = init,action) =>{
  let newState = [...state];
  switch(action.type){
    case "CREATE_TODO":
      newState = [
        ...newState,{
          id:Date.now(),
          content: action.content,
          completed: false
        }
      ]
      return newState;
    case "COMPLETED_TODO":
        const completedIndex = newState.findIndex(item => {
          return item.id === action.id;
        });
        newState[completedIndex].completed = true;
        return newState;
    case "UNDO_TODO":
        const undoIndex = newState.findIndex(item => {
          return item.id === action.id;
        });
        newState[undoIndex].completed = false;
        return newState;
    case "DELETE_TODO":
        const deleteFilter = newState.filter(item => {
          return item.id != action.id
        })
        return deleteFilter;
    default:
      return state;
  }
}
export default todoReducer;