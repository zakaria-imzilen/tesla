import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../css/CustomOrder.css";

import {
	xT,
	interiorLight,
	yT,
	threeT,
	blackXImg,
	grayXImg,
	blueXImg,
	redXImg,
	xInteriorBlackImg,
	xInteriorWhiteImg,
	xInteriorCreamImg,
	xWheelSecondImg,
	xWheelFirstImg,
	paintGrayThreeImg,
	MainThreeImg,
	paintBlueThreeImg,
	paintBlackThreeImg,
	paintRedThreeImg,
	interiorBlackThreeImg,
	interiorBlack_and_WhiteThreeImg,
	wheelsThreeecondThreeImg,
	MainSImg,
	paintGraySImg,
	paintBlueSImg,
	paintBlackSImg,
	paintRedSImg,
	interiorBlackSImg,
	interiorBlack_and_WhiteSImg,
	interiorCreamSImg,
	wheelsSecondSImg,
	MainYImg,
	paintGrayYImg,
	paintBlueYImg,
	paintBlackYImg,
	paintRedYImg,
	interiorBlackYImg,
	interiorBlack_and_WhiteYImg,
	wheelsYSecondImg,
} from "./images";

import modelXData from "../../ModelX.json";
import modelYData from "../../ModelY.json";
import model3Data from "../../Model3.json";
import modelSData from "../../ModelS.json";
import Navbar from "./Navbar";
import GeneralInfo from "./CustomOrder/GeneralInfo";
import Paint from "./CustomOrder/Paint";
import Wheels from "./CustomOrder/Wheels";
import Interior from "./CustomOrder/Interior";
import Order from "./CustomOrder/Order";
import EnhancedAuto from "./CustomOrder/EnhancedAuto";
import { useSelector } from "react-redux";

const CustomOrder = () => {
	const { car } = useParams();
	// const [scrollV, setScrollV] = useState(0);

	// useEffect(() => {
	//   const handleScroll = (e) => setScrollV(e.target.documentElement.scrollTop);
	//   window.addEventListener("scroll", handleScroll);

	//   if (scrollV > 1000) {
	//   }
	// }, [scrollV]);

	const [data, setData] = useState({});

	const user = useSelector((state) => state.user);
	const customOrderRedux = useSelector((state) => state.customOrder);
	const navigate = useNavigate();

	useEffect(() => {
		switch (car) {
			case "modelx":
				setData(modelXData);
				break;
			case "model3":
				setData(model3Data);
				break;
			case "modely":
				setData(modelYData);
				break;

			case "models":
				setData(modelSData);
				break;

			default:
				navigate("/");
				break;
		}
	}, []);

	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const date = new Date();
	const month = new Date().getMonth();

	const renderImg = (imgName) => {
		switch (car) {
			case "modelx":
				switch (imgName) {
					case "main":
						return xT;
					case "paint":
						return [xT, grayXImg, blueXImg, blackXImg, redXImg];
					case "interior":
						return [xInteriorBlackImg, xInteriorWhiteImg, xInteriorCreamImg];
					case "wheels":
						return [xWheelFirstImg, xWheelSecondImg];
				}
				break;
			case "model3":
				switch (imgName) {
					case "main":
						return MainThreeImg;
					case "paint":
						return [
							MainThreeImg,
							paintGrayThreeImg,
							paintBlueThreeImg,
							paintBlackThreeImg,
							paintRedThreeImg,
						];
					case "interior":
						return [interiorBlackThreeImg, interiorBlack_and_WhiteThreeImg];
					case "wheels":
						return [MainThreeImg, wheelsThreeecondThreeImg];
				}
				break;
			case "models":
				switch (imgName) {
					case "main":
						return MainSImg;
					case "paint":
						return [
							MainSImg,
							paintGraySImg,
							paintBlueSImg,
							paintBlackSImg,
							paintRedSImg,
						];
					case "interior":
						return [
							interiorBlackSImg,
							interiorBlack_and_WhiteSImg,
							interiorCreamSImg,
						];
					case "wheels":
						return [MainSImg, wheelsSecondSImg];
				}
				break;
			case "modely":
				switch (imgName) {
					case "main":
						return MainYImg;
					case "paint":
						return [
							MainYImg,
							paintGrayYImg,
							paintBlueYImg,
							paintBlackYImg,
							paintRedYImg,
						];
					case "interior":
						return [interiorBlackYImg, interiorBlack_and_WhiteYImg];
					case "wheels":
						return [MainYImg, wheelsYSecondImg];
				}
				break;
		}
	};

	const renderImgClicked = (sectionWanted) => {
		switch (sectionWanted) {
			case "main":
				return renderImg("main");
			case "paint":
				switch (customOrderRedux.paint) {
					case 1:
						return renderImg("paint")[1];
					case 2:
						return renderImg("paint")[2];
					case 3:
						return renderImg("paint")[3];
					case 4:
						return renderImg("paint")[4];

					default:
						return renderImg("main");
				}
			case "interior":
				switch (customOrderRedux.interior) {
					case 0:
						return renderImg("interior")[0];
					case 1:
						return renderImg("interior")[1];
					case 2:
						return renderImg("interior")[2];
				}
			case "wheels":
				switch (customOrderRedux.wheels) {
					case 0:
						return renderImg("wheels")[0];
					case 1:
						return renderImg("wheels")[1];
				}
		}
	};

	if (Object.keys(data).length === 0) {
		return <i className="bi bi-arrow-clockwise"></i>;
	} else {
		if (user.loggedIn) {
			return (
				<div id="customOrder" className="d-flex container-fluid">
					<Navbar menuSte={false} homePage={false} />
					<div id="leftSide" className="me-auto w-75">
						{/* Main image */}
						<article className="d-flex flex-column justify-content-center align-items-center">
							<img src={renderImg("main")} alt="" className="w-75" />
						</article>
						{/* Paint images */}
						<article className="d-flex flex-column justify-content-center">
							<img src={renderImgClicked("paint")} alt="" className="w-100" />
						</article>
						<article className="d-flex flex-column justify-content-center">
							<img src={renderImgClicked("wheels")} alt="" className="w-100" />
						</article>
						<article
							className="d-flex flex-column justify-content-center"
							style={{
								backgroundImage: `url(${renderImgClicked("interior")})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
							}}
							id="interior"
						></article>
						<article className="d-flex flex-column justify-content-center">
							<video
								title="Navigate on Autopilot"
								alt="Navigate on Autopilot"
								id="video-id-Navigate on Autopilot"
								data-src="https://digitalassets.tesla.com/video/upload/f_auto:video,q_auto:best/prod/coin/static_assets/MODEL3/UI/navigate-on-autopilot.mp4"
								data-src-desktop="https://digitalassets.tesla.com/video/upload/f_auto:video,q_auto:best/prod/coin/static_assets/MODEL3/UI/navigate-on-autopilot.mp4"
								src="https://digitalassets.tesla.com/video/upload/f_auto:video,q_auto:best/prod/coin/static_assets/MODEL3/UI/navigate-on-autopilot.mp4"
								autoPlay={true}
								loop
								muted
							></video>
						</article>
					</div>
					<div id="rightSide" className="py-5 px-4 ms-auto w-25">
						<GeneralInfo data={data} />

						<Paint paint={data.paint} />

						<Wheels wheels={data.wheels} />

						<Interior interior={data.interior} />

						<EnhancedAuto />

						<Order
							carData={data}
							name={data.name}
							month={monthNames[month]}
							year={date.getFullYear()}
						/>
					</div>
				</div>
			);
		} else {
			navigate("/");
		}
	}
};

export default CustomOrder;
