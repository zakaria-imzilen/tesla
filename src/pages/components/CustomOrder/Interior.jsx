import { BlackP, WhiteP } from "../images";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFeature } from "../../app/customOrderSlice";

const Interior = ({ interior }) => {
  const [now, setNow] = useState(0);
  const customOrder = useSelector((state) => state.customOrder);
  const dispatch = useDispatch();

  return (
    <article className="interior d-flex flex-column align-content-center justify-content-center">
      <h3 className="text-center display-5 fw-regular">Interior</h3>

      <div className="my-4 d-flex gap-3 justify-content-center">
        <img
          src={BlackP}
          alt={interior[0].name}
          width="40"
          draggable={false}
          onClick={() => dispatch(toggleFeature({ name: "interior", num: 0 }))}
        />
        <img
          src={WhiteP}
          alt={interior[1].name}
          width="40"
          draggable={false}
          onClick={() => dispatch(toggleFeature({ name: "interior", num: 1 }))}
        />
      </div>
      <p className="text-center" key={interior[customOrder.interior].name}>
        <span className="text-dark">
          {interior[customOrder.interior].name}{" "}
        </span>
        <span className="text-secondary">
          {interior[customOrder.interior].price === 0
            ? "Included"
            : `$${interior[customOrder.interior].price}`}
        </span>
      </p>
    </article>
  );
};

export default Interior;
