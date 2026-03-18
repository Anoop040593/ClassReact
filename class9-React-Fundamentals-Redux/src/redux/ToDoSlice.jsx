import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todoList: ["task1", "task2"],
    value: "",
  },
  reducers: {
    setValue: (state, obj) => {
      console.log("I am a set value", obj);
      state.value = obj.payload;
    },
    addTask: (state, obj) => {
      const updatedTask = [...state.todoList, obj.payload];
      state.todoList = updatedTask;
    },
  },
});

export default todoSlice;
