import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    user: null,
    isFetching: false,
    err: false,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.err = false;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      state.err = false;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.err = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailed } = user.actions;
export default user.reducer;
