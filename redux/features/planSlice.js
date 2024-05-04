import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    updatePlan: (state, action) => {
      state.plan = action.payload.plan;
      state.basis = action.payload.basis;
    },
  },
});

export const { updatePlan } = planSlice.actions;
export default planSlice.reducer;
