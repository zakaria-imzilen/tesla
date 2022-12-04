import { createSlice } from "@reduxjs/toolkit";
import users from "../../users.json";

export const user = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    userLoggedInData: {
      // format: id, firstName, lastName, email
    },
  },
  reducers: {
    logMeIn: (state, { payload }) => {
      const found = users.users.filter(
        (usr) => usr.email === payload.email && usr.pwd === payload.pwd
      );

      if (found.length > 0) {
        state.loggedIn = true;
        state.userLoggedInData = found[0];
      }
    },
  },
});

export default user.reducer;
export const { logMeIn } = user.actions;
