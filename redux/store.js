import { configureStore } from "@reduxjs/toolkit";
import addOnsSliceReducer from "./features/addOnsSlice";
import userSliceReducer from "./features/userSlice";
import planSliceReducer from "./features/planSlice";

export const store = configureStore({
  reducer: {
    addOnsSliceReducer,
    userSliceReducer,
    planSliceReducer,
  },
});
