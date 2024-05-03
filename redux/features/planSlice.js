import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    updatePlan: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { updatePlan } = planSlice.actions;
export default planSlice.reducer;
