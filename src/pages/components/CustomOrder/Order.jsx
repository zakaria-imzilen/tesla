import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
} from "@mui/material";
import PublishIcon from "@mui/icons-material/Publish";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customOrderCar } from "../../app/customOrderSlice";

const Order = ({ name, month, year, carData }) => {
	const customOrder = useSelector((state) => state.customOrder);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleOrder = async () => {
		const carFeaturesPrices = {
			basicPrice: carData.price[customOrder.wheelDrive].price,
			paint: carData.paint[customOrder.paint].price,
			wheels: carData.wheels[customOrder.wheels].price,
			interior: carData.interior[customOrder.interior].price,
		};
		await dispatch(
			customOrderCar({
				user: user.userLoggedInData,
				carName: name,
				carFeaturesPrices,
			})
		);
	};

	const [dlgSts, setDlgSts] = useState(false);

	return (
		<article className="d-flex flex-column align-content-center justify-content-center">
			<h3 className="text-center display-5 fw-regular">Order your {name}</h3>
			<p className="text-secondary text-center">
				Est. Delivery: {month} {year}
			</p>
			<Button
				variant="contained"
				color="primary"
				startIcon={<PublishIcon />}
				onClick={() => setDlgSts(true)}
			>
				Order your car
			</Button>
			{/* <button className="btn btn-primary w-100"></button> */}
			{dlgSts && (
				<Dialog onClose={() => setDlgSts(false)} open={dlgSts}>
					<DialogContent>
						<DialogContentText>
							Confirm your order by clicking this button below 👇🏻
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleOrder} variant="contained" color="primary">
							Confirm Order
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</article>
	);
};

export default Order;
