import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import { xT, yT, threeT, sT } from "./components/images";
import Navbar from "./components/Navbar";
import "../css/testdrive.css";
import { useDispatch, useSelector } from "react-redux";
import { setUpTest } from "./app/testDriveSlice";

const Testdrive = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const [imgChoosen, setImgChoosen] = useState(1);

	const btn1 = useRef(null);
	const btn2 = useRef(null);
	const btn3 = useRef(null);
	const btn4 = useRef(null);

	const renderImg = () => {
		switch (imgChoosen) {
			case 1:
				return <img src={xT} className="w-100" />;
			case 2:
				btn2.current.classList.add("border", "border-primary", "border-2");
				return <img src={yT} className="w-100" />;
			case 3:
				btn3.current.classList.add("border", "border-primary", "border-2");
				return <img src={threeT} className="w-100" />;
			case 4:
				btn4.current.classList.add("border", "border-primary", "border-2");
				return <img src={sT} className="w-100" />;
		}
	};

	useEffect(() => {
		btn1.current.classList.add("border", "border-primary", "border-2");

		switch (imgChoosen) {
			case 1:
				btn2.current.classList.remove("border", "border-primary", "border-2");
				btn3.current.classList.remove("border", "border-primary", "border-2");
				btn4.current.classList.remove("border", "border-primary", "border-2");
				break;
			case 2:
				btn1.current.classList.remove("border", "border-primary", "border-2");
				btn3.current.classList.remove("border", "border-primary", "border-2");
				btn4.current.classList.remove("border", "border-primary", "border-2");
				break;
			case 3:
				btn2.current.classList.remove("border", "border-primary", "border-2");
				btn1.current.classList.remove("border", "border-primary", "border-2");
				btn4.current.classList.remove("border", "border-primary", "border-2");

				break;
			case 4:
				btn2.current.classList.remove("border", "border-primary", "border-2");
				btn3.current.classList.remove("border", "border-primary", "border-2");
				btn1.current.classList.remove("border", "border-primary", "border-2");

				break;
		}
	}, [imgChoosen]);

	const [phone, setPhone] = useState("+212");
	const handleChangePhone = (e) => {
		const regPhone = /([0-9])/g;

		if (regPhone.test(e.key)) {
			if (phone.length < 13) {
				setPhone((prev) => prev + e.key);
			}
		}

		if (e.key === "Backspace") {
			setPhone((prev) => {
				return prev.substring(0, prev.length - 1);
			});
		}
	};

	const [fullName, setFullName] = useState(
		user.loggedIn ? user.userLoggedInData.displayName : ""
	);
	const [contactPref, setContactPref] = useState("email");
	const [email, setEmail] = useState(
		user.loggedIn ? user.userLoggedInData.email : ""
	);
	const [country, setCountry] = useState("MA");
	const [zipCode, setZipCode] = useState("");

	const handleSubmit = () => {
		if (fullName.length < 6) {
			document.getElementById("fullName").classList.remove("border-light");
			document.getElementById("fullName").classList.add("border-danger");
			return;
		} else if (phone.length < 13) {
			document.getElementById("phoneNumber").classList.add("border-danger");
			return;
		} else if (
			!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
				email
			)
		) {
			document.getElementById("email").classList.add("border-danger");
			return;
		} else if (zipCode.length < 2) {
			document.getElementById("zipCode").classList.add("border-danger");
			return;
		} else {
			// Everything is OKAY 👍🏻
			dispatch(
				setUpTest({
					carChoosen: imgChoosen,
					contact: {
						fullName,
						contactPref,
						email,
						country,
						zipCode,
					},
				})
			);
			setFullName("");
			setContactPref("email");
			setCountry("MA");
			setEmail("");
			setPhone("+212");
			setZipCode("");
			setImgChoosen(1);

			alert(`Your test drive Mr/Mme ${fullName} is well registred`);
			// Here where the FIREBASE work starts 🚀🚀🚀🚀
		}
	};

	return (
		<div className="position-relative" id="testDrive">
			<Navbar menuSte={true} />

			<main className="py-5 container m-auto">
				<h1 className="text-start mt-5 display-6">Schedule a Test Drive</h1>
				<p className="fw-semibold text-secondary fs-6">
					Test Drive a Tesla at a store near you. Drivers must have a valid U.S.
					driver's license and be 18 years of age or older.
				</p>

				<div className="container w-100">{renderImg()}</div>

				<div className="container d-flex flex-wrap justify-content-center gap-2">
					<button
						onClick={() => setImgChoosen(1)}
						className="px-4 btn btn-outline-secondary btn-sm rounded-2"
						id="1"
						ref={btn1}
					>
						Model S
					</button>
					<button
						onClick={() => setImgChoosen(2)}
						className="px-4 btn btn-outline-secondary btn-sm rounded-2"
						id="2"
						ref={btn2}
					>
						Model 3
					</button>
					<button
						onClick={() => setImgChoosen(3)}
						className="px-4 btn btn-outline-secondary btn-sm rounded-2"
						id="3"
						ref={btn3}
					>
						Model X
					</button>
					<button
						onClick={() => setImgChoosen(4)}
						className="px-4 btn btn-outline-secondary btn-sm rounded-2"
						id="4"
						ref={btn4}
					>
						Model Y
					</button>
				</div>

				<form className="my-5">
					<h1 className="text-start mt-5 display-6">Contact Information</h1>

					<div className="my-4">
						<label
							htmlFor="fullName"
							className="form-label fw-semibold text-secondary"
						>
							Full Name
						</label>
						<input
							type="text"
							className="form-control bg-secondary bg-opacity-10 rounded-3 border-light"
							name="fullName"
							id="fullName"
							aria-describedby="helpId"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
						/>
					</div>

					<div className="my-3">
						<label
							htmlFor="contactPreference"
							className="form-label fw-semibold text-secondary"
						>
							Contact Preference
						</label>
						<select
							className="form-select text-dark fw-semibold"
							name="contactPreference"
							id="contactPreference"
							value={contactPref}
							onChange={() =>
								setContactPref((prev) => {
									if (prev === "email") {
										return "phone";
									}
									return "email";
								})
							}
						>
							<option selected value="email">
								Email
							</option>
							<option value="phone">Phone</option>
						</select>
					</div>

					<div className="my-3">
						<label
							htmlFor="phoneNumber"
							className="form-label fw-semibold text-secondary"
						>
							Phone Number
						</label>
						<input
							type="tel"
							className="form-control fw-semibold"
							name="phoneNumber"
							id="phoneNumber"
							onKeyUp={handleChangePhone}
							value={phone}
						/>
					</div>

					<div className="my-3">
						<label
							htmlFor="email"
							className="form-label fw-semibold text-secondary"
						>
							Email
						</label>
						<input
							type="email"
							className="form-control"
							name="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="my-3">
						<label
							htmlFor="country"
							className="form-label fw-semibold text-secondary"
						>
							Country
						</label>
						<select
							className="form-select text-dark fw-semibold"
							name="country"
							id="country"
							value={country}
							onChange={() =>
								setCountry(document.getElementById("country").value)
							}
						>
							<option value="MA">Morocco</option>
							<option value="KR">South Korea</option>
							<option value="SS">South Sudan</option>
							<option value="ES">Spain</option>
							<option value="LK">Sri Lanka</option>
							<option value="SD">Sudan</option>
							<option value="TH">Thailand</option>
							<option value="AE">United Arab Emirates</option>
							<option value="GB">United Kingdom</option>
							<option value="US">United States</option>
							<option value="UM">United States Minor Outlying Islands</option>
							<option value="YE">Yemen</option>
						</select>
					</div>

					<div className="my-3">
						<label
							htmlFor="zipCode"
							className="form-label fw-semibold text-secondary"
						>
							ZIP Code
						</label>
						<input
							type="text"
							className="form-control"
							name="zipCode"
							id="zipCode"
							value={zipCode}
							onChange={(e) => setZipCode(e.target.value)}
						/>
					</div>

					<p className="my-5 text-secondary" style={{ fontSize: ".8em" }}>
						By clicking "Submit & Continue" I agree to share the provided
						information with Tesla to be contacted with more details or offers
						about Tesla products. I understand these calls or texts may use
						computer-assisted dialing or pre-recorded messages. This consent is
						not a condition of the test drive.
					</p>

					<button
						type="button"
						onClick={handleSubmit}
						className="btn btn-primary fs-6"
					>
						Submit & Continue
					</button>
				</form>
			</main>

			<Footer fixedBottom={false} />
		</div>
	);
};

export default Testdrive;
