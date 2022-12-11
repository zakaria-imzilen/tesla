import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../config/fbconfig";

export const signMeOut = createAsyncThunk("signMeOut", async () => {
	await auth.signOut();
});

export const user = createSlice({
	name: "user",
	initialState: {
		loggedIn: false,
		userLoggedInData: {
			// format: uid, displayName, email, photoURL
		},
		errorSignOut: null,
	},
	reducers: {
		logMeIn: (state, { payload }) => {
			// Firebase Authentication
			state.loggedIn = true;
			state.userLoggedInData = {
				uid: payload.uid,
				displayName: payload.displayName,
				email: payload.email,
				photoURL: payload.photoURL,
			};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(signMeOut.rejected, (state, { payload }) => {
			state.errorSignOut = payload;
		});
		builder.addCase(signMeOut.fulfilled, (state) => {
			state.loggedIn = false;
			state.userLoggedInData = {};
			state.errorSignOut = null;
		});
	},
});

export default user.reducer;
export const { logMeIn } = user.actions;
