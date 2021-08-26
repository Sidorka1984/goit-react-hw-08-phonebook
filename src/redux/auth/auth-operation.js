import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchRegister,
  fetchlogIn,
  fetchlogOut,
  fetchCurrentAuth,
} from "../../services/AuthApi.js";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/singup",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await fetchRegister(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return <h1>Error...</h1>;
      //  return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await fetchlogIn(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return <h1>Error...</h1>;
      //  return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await fetchlogOut();
      token.unset();
    } catch (error) {
      return <h1>Error...</h1>;
      //  return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await fetchCurrentAuth();
      return data;
    } catch (error) {
      return <h1>Error...</h1>;
      //  return thunkAPI.rejectWithValue(error.message);
    }
  }
);