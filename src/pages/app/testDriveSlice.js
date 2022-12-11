import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/fbconfig";

export const saveTestDrive = createAsyncThunk(
	"saveTestDrive",
	async (thunkAPI) => {
		await addDoc(collection(db, "TestDrives"), {
			...thunkAPI,
			date: new Date(),
		});
	}
);

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
		saving: null,
	},
	extraReducers: (builder) => {
		builder.addCase(saveTestDrive.pending, (state) => {
			state.saving = "pending";
		});
		builder.addCase(saveTestDrive.rejected, (state) => {
			state.saving = false;
		});
		builder.addCase(saveTestDrive.fulfilled, (state) => {
			state.saving = true;
		});
	},
});

export default testDriveSlice.reducer;
