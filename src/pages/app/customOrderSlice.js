import { createSlice } from "@reduxjs/toolkit";

export const customOrderSlice = createSlice({
  name: "customOrder",
  initialState: {
    wheelDrive: 0,
    paint: 0,
    wheels: 0,
    interior: 0,
    enhancedAutoPilot: false,
    order: {},
    user: {},
  },
  reducers: {
    toggleFeature: (state, { payload }) => {
      switch (payload.name) {
        case "wheelDrive":
          state.wheelDrive = payload.num;
          break;
        case "paint":
          state.paint = payload.num;
          break;
        case "wheels":
          state.wheels = payload.num;
          break;
        case "interior":
          state.interior = payload.num;
          break;
        case "enhancedAutoPilot":
          state.enhancedAutoPilot = payload.num;
          break;
      }
    },
    order: (state, { payload }) => {
      // Set user in states from another store slice called user
      state.user = payload.user;
      state.order = { ...payload.car, carName: payload.carName };
    },
    resetStates: (state) => {
      state.wheelDrive = 0;
      state.paint = 0;
      state.wheels = 0;
      state.interior = 0;
      state.enhancedAutoPilot = false;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase
  },
});

export default customOrderSlice.reducer;
export const { toggleFeature, order, resetStates } = customOrderSlice.actions;
