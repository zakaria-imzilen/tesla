import { useEffect, useState } from "react";
import TeslaLogo from "./images/tesla.png";
import "../../css/Navbar.css";
import { Link } from "react-router-dom";

import {
	GoogleAuthProvider,
	EmailAuthProvider,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../config/fbconfig";
import { Dialog } from "@mui/material";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useDispatch, useSelector } from "react-redux";
import user, { logMeIn, signMeOut } from "../app/user";

const Navbar = ({ menuSte, homePage }) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	// Firebase Auth UI CONFIG
	const uiConfig = {
		signInFlow: "popup",
		signInSuccessUrl: "/",
		signInOptions: [
			GoogleAuthProvider.PROVIDER_ID,
			EmailAuthProvider.PROVIDER_ID,
		],
	};

	const [menu, setMenu] = useState(false);

	const renderAsideClasses = () => {
		return menu
			? "position-absolute top-0 end-0 w-75 bg-light py-5 px-4"
			: "invisible";
	};

	// Dialog useState
	const [openDialog, setOpenDialog] = useState(false);

	// Firebase Auth user entered data
	useEffect(() => {
		onAuthStateChanged(auth, (userLoggedIn) => {
			if (userLoggedIn) {
				dispatch(
					logMeIn({
						uid: userLoggedIn.uid,
						displayName: userLoggedIn.displayName,
						email: userLoggedIn.email,
						photoURL: userLoggedIn.photoURL,
					})
				);
			}
		});
	}, []);

	return (
		<nav
			className={`position-fixed container-fluid py-3 px-3 ${
				!homePage && "bg-light shadow-sm"
			}`}
		>
			<div className="w-80 container d-flex justify-content-between">
				<div className="d-flex gap-2 align-items-center">
					<Link to="/">
						<img src={TeslaLogo} alt="Tesla Logo" width={30} />
						<span style={{ fontFamily: "Athene", fontSize: "1.2rem" }}>
							TESLA
						</span>
					</Link>
				</div>
				{menuSte && (
					<>
						<button
							className="btn bg-secondary bg-opacity-25 rounded-1 fw-bold"
							onClick={() => setMenu(!menu)}
							id="btn-toggler"
						>
							Menu
						</button>

						<div id="list-toggle" className="d-flex align-items-center gap-5">
							<Link to="/customorder/model3">
								<span className="fs-6 font-monospace navbar-link fw-bold">
									Model 3
								</span>
							</Link>
							<Link to="/customorder/modely">
								<span className="fs-6 font-monospace navbar-link fw-bold">
									Model Y
								</span>
							</Link>
							<Link to="/customorder/modelx">
								<span className="fs-6 font-monospace navbar-link fw-bold">
									Model X
								</span>
							</Link>
							<Link to="/customorder/models">
								<span className="fs-6 font-monospace navbar-link fw-bold">
									Model S
								</span>
							</Link>
							{!user.loggedIn && (
								<span
									className="fs-6 font-monospace navbar-link fw-bold btn btn-primary"
									onClick={() => setOpenDialog(true)}
								>
									Sign Up/In
								</span>
							)}
							{user.loggedIn && (
								<span
									className="fs-6 btn btn-outline-danger font-monospace navbar-link fw-bold"
									onClick={async () => await dispatch(signMeOut())}
								>
									Sign out
								</span>
							)}
						</div>
					</>
				)}
			</div>

			<aside className={renderAsideClasses()}>
				<div className="d-block text-end">
					<i onClick={() => setMenu(!menu)} className="bi bi-x-circle-fill"></i>
				</div>
				<Link to="/customorder/model3">
					<span className="fs-6 font-monospace navbar-link fw-bold">
						Model 3
					</span>
				</Link>
				<Link to="/customorder/modely">
					<span className="fs-6 font-monospace navbar-link fw-bold">
						Model Y
					</span>
				</Link>
				<Link to="/customorder/modelx">
					<span className="fs-6 font-monospace navbar-link fw-bold">
						Model X
					</span>
				</Link>
				<Link to="/customorder/models">
					<span className="fs-6 font-monospace navbar-link fw-bold">
						Model S
					</span>
				</Link>
				{!user.loggedIn && (
					<span
						className="fs-6 font-monospace navbar-link fw-bold btn btn-primary"
						onClick={() => setOpenDialog(true)}
					>
						Sign Up/In
					</span>
				)}
				{user.loggedIn && (
					<span
						className="fs-6 btn btn-outline-danger font-monospace navbar-link fw-bold"
						onClick={async () => await dispatch(signMeOut())}
					>
						Sign out
					</span>
				)}
			</aside>

			<Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
				{/* Firebase Auth */}
				<StyledFirebaseAuth
					uiConfig={uiConfig}
					firebaseAuth={auth}
				></StyledFirebaseAuth>
			</Dialog>
		</nav>
	);
};

export default Navbar;
