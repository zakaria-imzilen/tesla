import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFeature } from "../../app/customOrderSlice";
import { GrayP, WhiteP } from "../images";

const Wheels = ({ wheels }) => {
  const [now, setNow] = useState(0);
  const customOrder = useSelector((state) => state.customOrder);
  const dispatch = useDispatch();

  return (
    <article className="d-flex flex-column align-content-center justify-content-center">
      <h3 className="text-center display-5 fw-regular">Wheels</h3>

      <div className="my-4 d-flex gap-3 justify-content-center">
        <img
          onClick={() => dispatch(toggleFeature({ name: "wheels", num: 0 }))}
          src={WhiteP}
          alt=""
          width="40"
        />
        <img
          onClick={() => dispatch(toggleFeature({ name: "wheels", num: 1 }))}
          src={GrayP}
          alt=""
          width="40"
        />
      </div>
      <p className="text-center">
        <span className="text-dark">{wheels[customOrder.wheels].name} </span>
        <span className="text-secondary">
          {wheels[customOrder.wheels].price === 0
            ? "Included"
            : "$" + wheels[customOrder.wheels].price}
          {' '}
        </span>
        <span className="text-secondary text-center">
          {wheels[customOrder.wheels].season}-Season Tires
          <br />
          Range (est.) : {wheels[customOrder.wheels].range}mi
        </span>
      </p>
    </article>
  );
};

export default Wheels;
