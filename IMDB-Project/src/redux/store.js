import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./paginationSlice";


const mystore = configureStore({
    reducer: {
        paginationState: paginationSlice.reducer, //slice of the global store, 

    }
})

export default mystore