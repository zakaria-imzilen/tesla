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
  const navigate = useNavigate();

  useEffect(() => {
    switch (car) {
      case "modelX":
        setData(modelXData);
        break;
      case "model3":
        setData(model3Data);
        break;
      case "modelY":
        setData(modelYData);
        break;

      default:
        setData(modelSData);
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
      case "modelX":
        switch (imgName) {
          case "main":
            return xT;
          case "paint":
            return [xT, blackXImg, grayXImg, blueXImg, redXImg];
          case "interior":
            return [xInteriorBlackImg, xInteriorWhiteImg, xInteriorCreamImg];
          case "wheel":
            return [xT, xWheelSecondImg];
        }
        break;

      default:
        break;
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
            <article className="d-flex flex-column justify-content-center align-items-center">
              <img src={renderImg("main")} alt="" className="w-75" />
            </article>
            <article className="d-flex flex-column justify-content-center">
              <img src={yT} alt="" className="w-100" />
            </article>
            <article className="d-flex flex-column justify-content-center">
              <img src={threeT} alt="" className="w-100" />
            </article>
            <article
              className="d-flex flex-column justify-content-center"
              style={{ backgroundImage: `url(${interiorLight})` }}
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
      navigate("/signin");
    }
  }
};

export default CustomOrder;
