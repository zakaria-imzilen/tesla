import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { toggleFeature } from "../../app/customOrderSlice";

const EnhancedAuto = () => {
	const customOrder = useSelector((state) => state.customOrder);
	const dispatch = useDispatch();

	return (
		<article className="d-flex flex-column align-content-center justify-content-center">
			<h3 className="text-center display-5 fw-regular">Enhanded Autopilot</h3>
			<p className="text-secondary text-center">$6000</p>
			<ul>
				<li>Navigate on Autopilot</li>
				<li>Auto Lane Change</li>
				<li>Autopark</li>
				<li>Summon</li>
				<li>Smart Summon</li>
			</ul>

			{customOrder.enhancedAutoPilot ? (
				<Button
					variant="contained"
					color="error"
					startIcon={<CancelIcon />}
					onClick={() =>
						dispatch(
							toggleFeature({
								name: "enhancedAutoPilot",
								num: false,
							})
						)
					}
				>
					Remove
				</Button>
			) : (
				<Button
					variant="contained"
					color="primary"
					startIcon={<AddIcon />}
					disabled={customOrder.enhancedAutoPilot}
					onClick={() =>
						dispatch(
							toggleFeature({
								name: "enhancedAutoPilot",
								num: true,
							})
						)
					}
				>
					Add
				</Button>
			)}
		</article>
	);
};

export default EnhancedAuto;
