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
      } else {
        const addedAddon = allAddOns.filter(
          (addon) => addon.title === action.payload
        )[0];

        state.push(addedAddon);
      }
    },

    remove: (state, action) => {
      const removedAddOnIndex = state.findIndex(
        (addon) => addon.title === action.payload
      );

      state.splice(removedAddOnIndex, 1);
    },
  },
});

export const { add, remove } = addOnsSlice.actions;
export default addOnsSlice.reducer;
