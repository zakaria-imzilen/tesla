import { configureStore } from "@reduxjs/toolkit";
import { customOrderSlice } from "../pages/app/customOrderSlice";
import { testDriveSlice } from "../pages/app/testDriveSlice";
import { user } from "../pages/app/user";

export const store = configureStore({
  reducer: {
    customOrder: customOrderSlice.reducer,
    user: user.reducer,
    testDrive: testDriveSlice.reducer
  },
});
