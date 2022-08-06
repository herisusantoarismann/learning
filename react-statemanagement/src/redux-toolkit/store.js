import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter/counterSlice";
import userSlice from "./User/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});
