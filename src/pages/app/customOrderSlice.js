import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../config/fbconfig";

export const customOrderCar = createAsyncThunk(
	"customOrderCar",
	async (thunkAPI) => {
		await addDoc(collection(db, "CustomOrders"), {
			user: thunkAPI.user,
			car: { carName: thunkAPI.carName, ...thunkAPI.carFeaturesPrices },
			date: new Date(),
		});
	}
);

export const customOrderSlice = createSlice({
	name: "customOrder",
	initialState: {
		wheelDrive: 0,
		paint: 0,
		wheels: 0,
		interior: 0,
		enhancedAutoPilot: false,
		order: {},
		ordering: null,
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
		resetStates: (state) => {
			state.wheelDrive = 0;
			state.paint = 0;
			state.wheels = 0;
			state.interior = 0;
			state.enhancedAutoPilot = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(customOrderCar.pending, (state) => {
			state.ordering = "pending";
		});
		builder.addCase(customOrderCar.rejected, (state) => {
			state.ordering = false;
		});
		builder.addCase(customOrderCar.fulfilled, (state) => {
			state.ordering = true;
		});
	},
});

export default customOrderSlice.reducer;
export const { toggleFeature, resetStates } = customOrderSlice.actions;
