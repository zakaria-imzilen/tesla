import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../../css/CustomOrder/GeneralInfo.css";
import { toggleFeature } from "../../app/customOrderSlice";

const GeneralInfo = ({ data }) => {
  const customOrder = useSelector((state) => state.customOrder);
  const dispatch = useDispatch();

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
  const month = new Date().getMonth();

  useEffect(() => {
    switch (customOrder.wheelDrive) {
      case 0:
        document
          .getElementById("wheelDrive0")
          .classList.remove("border-secondary", "text-secondary");
        document
          .getElementById("wheelDrive0")
          .classList.add("border-primary", "text-primary");
        document
          .getElementById("wheelDrive1")
          .classList.remove("border-primary", "text-primary");
        document
          .getElementById("wheelDrive1")
          .classList.add("border-secondary", "text-secondary");
        break;

      default:
        document
          .getElementById("wheelDrive1")
          .classList.remove("border-secondary", "text-secondary");
        document
          .getElementById("wheelDrive1")
          .classList.add("border-primary", "text-primary");
        document
          .getElementById("wheelDrive0")
          .classList.remove("border-primary", "text-primary");
        document
          .getElementById("wheelDrive0")
          .classList.add("border-secondary", "text-secondary");
        break;
    }
  }, [customOrder]);

  let i = -1;

  return (
    <article className="d-flex flex-column align-content-center">
      <div className="w-100 my-5 text-center">
        <h3 className="display-5 fw-semibold">{data.name}</h3>
        <p className="text-secondary">Est. Delivery: {monthNames[month]}</p>
      </div>
      <div className="row row-cols-3 text-center">
        <div className="col">
          <h6 className="h4">{data.range}mi</h6>
          <p className="text-secondary" style={{ fontSize: ".8em" }}>
            Range (est .)
          </p>
        </div>
        <div className="col">
          <h6 className="h4">{data.topSpeed}mph</h6>
          <p className="text-secondary" style={{ fontSize: ".8em" }}>
            Top Speed
          </p>
        </div>
        <div className="col">
          <h6 className="h4">{data.zeroToSexty}mph</h6>
          <p className="text-secondary" style={{ fontSize: ".8em" }}>
            0 - 60 mph
          </p>
        </div>
      </div>
      <div className="my-5 d-flex flex-column">
        {data.price.map((pr) => {
          i++;
          return (
            <div key={pr.price}>
              <h4 className="h5 mt-4">{pr.bigName}</h4>
              <div
                id={`wheelDrive${i}`}
                onClick={(e) =>
                  dispatch(
                    toggleFeature({
                      name: "wheelDrive",
                      num: e.currentTarget.id === "wheelDrive0" ? 0 : 1,
                    })
                  )
                }
                className="wheelDriveClick container d-flex justify-content-around align-content-center p-3 border border-secondary rounded-2 wheel text-secondary"
              >
                <h6 className="m-0">{pr.name}</h6>
                <h6 className="fw-regular m-0 ms-auto">${pr.price}</h6>
              </div>
            </div>
          );
        })}
      </div>
      <p className="my-3 text-secondary text-center">
        All prices are shown without potential incentives or gas savings of
        $6,600.
      </p>
    </article>
  );
};

export default GeneralInfo;
