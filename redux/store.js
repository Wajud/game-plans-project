import { configureStore } from "@reduxjs/toolkit";
import addOnsSliceReducer from "./features/addOnsSlice";

export const store = configureStore({
  reducer: {
    addOnsSliceReducer,
  },
});
