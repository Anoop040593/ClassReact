import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterRedux from "./reduxComponents/CounterRedux";
import ToDoRedux from "./reduxComponents/ToDoRedux";

function App() {
  return <CounterRedux></CounterRedux>;
  // return <ToDoRedux></ToDoRedux>;
}

export default App;
