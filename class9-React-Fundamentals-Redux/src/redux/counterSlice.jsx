import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 5,
    name: "Anoop",
    isUserLoggedIn: true,
  },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export default counterSlice;
