import { createSlice } from "@reduxjs/toolkit";

export const testDriveSlice = createSlice({
  name: "testDrive",
  initialState: {
    carChoosen: null,
    contact: {
      fullName: null,
      contactPref: null,
      email: null,
      country: null,
      zipCode: null,
    },
  },
  reducers: {
    setUpTest: (state, { payload }) => {
      switch (payload.carChoosen) {
        case 1:
          state.carChoosen = "Model S";
          break;
        case 2:
          state.carChoosen = "Model 3";
          break;
        case 3:
          state.carChoosen = "Model X";
          break;
        case 4:
          state.carChoosen = "Model Y";
          break;
      }

      state.contact.fullName = payload.fullName;
      state.contact.contactPref = payload.contactPref;
      state.contact.email = payload.email;
      state.contact.country = payload.country;
      state.contact.zipCode = payload.zipCode;
    },
  },
});

export default testDriveSlice.reducer;
export const { setUpTest } = testDriveSlice.actions;
