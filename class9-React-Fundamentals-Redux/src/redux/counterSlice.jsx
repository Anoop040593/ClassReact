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

    decrement: (state, data) => {
      console.log(data.payload);
      const subtractby = data.payload || 1;
      if (state.count !== 0) state.count -= subtractby;
    },
  },
});

export default counterSlice;
