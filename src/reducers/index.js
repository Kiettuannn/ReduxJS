import counterReducer from "./counter";
import {combineReducers} from "redux";
import todoReducer from "./todo";

const allReducers = combineReducers({
  counterReducer,
  todoReducer
  // Them nhieu reducer o day
})

export default allReducers;