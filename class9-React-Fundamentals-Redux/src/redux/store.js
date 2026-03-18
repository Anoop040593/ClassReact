import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./ToDoSlice";

const mystore = configureStore({
    reducer: {
        counterState: counterSlice.reducer, //slice of the global store, 
        // reducer here is function that knows how to update the slice when that update happens,
        //  represent the reducers obj in counterSlice.jsx
        toDoState: todoSlice.reducer
    }
})

export default mystore