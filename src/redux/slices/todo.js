import { createSlice } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import { fetchContact, addContact, deleteContact } from "../operation.js";
// import initialContacts from "../../Data/contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
    isLoding: false,
    error: null,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContact.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = null;
      state.error = null;
    },
    [fetchContact.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchContact.rejected]: (state, action) => {
      state.status = null;
      state.error = "Error";
    },
    [addContact.fulfilled]: (state, action) => {
      state.items = [action.payload, ...state.items];
      state.status = null;
      state.error = null;
    },
    [addContact.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [addContact.rejected]: (state, action) => {
      state.status = null;
      state.error = "Error";
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// const filterSlice = createSlice({
// name: "filter",
// initialState: initialState.filter,
// reducers: {
// changeFilter: (_, { payload }) => payload,
// },
// });

// const rootReduser = combineReducers({
// contacts: contactsSlice.reducer,
// filter: filterSlice.reducer,
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
