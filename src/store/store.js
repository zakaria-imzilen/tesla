import { configureStore } from "@reduxjs/toolkit";
import { customOrderSlice } from "../pages/app/customOrderSlice";
import { user } from "../pages/app/user";

export const store = configureStore({
  reducer: {
    customOrder: customOrderSlice.reducer,
    user: user.reducer,
  },
});
