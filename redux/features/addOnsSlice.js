import { createSlice } from "@reduxjs/toolkit";

const allAddOns = [
  {
    title: "online-service",
    monthlyRate: 1,
    yearlyrate: 10,
  },
  {
    title: "larger-storage",
    monthlyRate: 2,
    yearlyrate: 20,
  },
  {
    title: "customizable-profile",
    monthlyRate: 2,
    yearlyrate: 20,
  },
];

const initialState = [];

export const addOnsSlice = createSlice({
  name: "addOns",
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.some((addon) => addon.title === action.payload)) {
        return;
      }

      const addedAddon = allAddOns.filter(
        (addon) => addon.title === action.payload
      )[0];

      state.push(addedAddon);
      console.log("add ons state ", state);
    },

    remove: (state, payload) => {
      const removedAddOnIndex = state.findIndex(
        (addon) => addon.title === payload.action
      );
      // const removedAddon =
      state.splice(removedAddOnIndex, 1);
      console.log("add ons state ", state);
    },
  },
});

export const { add, remove } = addOnsSlice.actions;
export default addOnsSlice.reducer;
