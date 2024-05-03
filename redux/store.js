import { configureStore } from "@reduxjs/toolkit";
import addOnsSliceReducer from "./features/addOnsSlice";
import userSliceReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    addOnsSliceReducer,
    userSliceReducer,
  },
});
