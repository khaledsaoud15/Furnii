import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isFetching: false,
    isAuthenticated: false,
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
      state.isAuthenticated = true;
    },
    loginFailed: (state, action) => {
      state.isFetching = false;
      state.err = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    updateUserProfileSuccess: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logout,
  updateUserProfileSuccess,
} = userSlice.actions;

export const loginRequest = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/login",
      credentials
    );
    const user = response.data.data;
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailed(error.message));
  }
};

export const updateUserProfile = (id, data) => async (dispatch, getState) => {
  const token = getState().user.user.token;
  console.log(token);
  try {
    const response = await axios.put(
      `http://localhost:8080/auth/update/${id}`,
      data,
      {
        headers: { "x-auth-token": token },
      }
    );
    console.log("updated");
    dispatch(updateUserProfileSuccess(response.data.data));
  } catch (error) {
    dispatch(loginFailed(error.message));
  }
};

export default userSlice.reducer;
