import React from "react";
import { useDispatch, useSelector } from "react-redux";
import todoSlice from "../redux/ToDoSlice";

const actions = todoSlice.actions;
function ToDoRedux() {
  //   const list = ["revise js", "revise react"];
  const { todoList: list, value } = useSelector((store) => {
    return store.toDoState;
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    //update value state
    dispatch(actions.setValue(e.target.value));
  };
  const handleTask = () => {
    dispatch(actions.addTask(value));
  };
  return (
    <>
      <h2>To Do</h2>
      <div>
        <div className="inputBox">
          <input
            type="text"
            placeholder="write your task"
            value={value}
            onChange={handleChange}
          ></input>
          <button onClick={handleTask}>Add</button>
        </div>
        <div>
          <ul>
            {list.map((task, idx) => {
              return <li key={idx}>{task}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ToDoRedux;
