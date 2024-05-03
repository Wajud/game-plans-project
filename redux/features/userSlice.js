import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    signIn: (state, action) => {
      console.log("user signed in", action.payload);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
  },
});

export const { signIn } = userSlice.actions;
export default userSlice.reducer;
