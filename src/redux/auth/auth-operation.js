import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      toast.success("You are successfully registered");
      return data;
    } catch (error) {
      toast.error("Please check, may be you registered");
      return rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      toast.success("You are successfully loged in");
      return data;
    } catch (error) {
      toast.error("Please, try again");
      return rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      toast.success("You are successfully loged out");
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
      // TODO: Добавить обработку ошибки error.message
    }
  }
);
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log("Токена нет, уходим из fetchCurrentUser");
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   fetchRegister,
//   fetchlogIn,
//   fetchlogOut,
//   fetchCurrentAuth,
// } from "../../services/AuthApi.js";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

// const register = createAsyncThunk(
//   "auth/singup",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await fetchRegister(credentials);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return <h1>Error...</h1>;
//        return rejectWithValue(error.message);
//     }
//   }
// );

// const logIn = createAsyncThunk(
//   "auth/login",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await fetchlogIn(credentials);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return <h1>Error...</h1>;
//        return rejectWithValue(error.message);
//     }
//   }
// );

// const logOut = createAsyncThunk(
//   "auth/logout",
//   async (_, { rejectWithValue }) => {
//     try {
//       await fetchlogOut();
//       token.unset();
//     } catch (error) {
//       return <h1>Error...</h1>;
//        return rejectWithValue(error.message);
//     }
//   }
// );

// const fetchCurrentUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue();
//     }

//     token.set(persistedToken);
//     try {
//       const { data } = await fetchCurrentAuth();
//       return data;
//     } catch (error) {
//       return <h1>Error...</h1>;
//        return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// const operations = {
//   register,
//   logOut,
//   logIn,
//   fetchCurrentUser,
// };
// export default operations;
