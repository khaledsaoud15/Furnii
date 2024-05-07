import { createSlice } from "@reduxjs/toolkit";

const register = createSlice({
  name: "register",
  initialState: {
    allUsers: [],
  },

  reducers: {
    registerUser: (state, action) => {
      state.allUsers.push(action.payload);
    },
  },
});

export const { registerUser } = register.actions;
export default register.reducer;
