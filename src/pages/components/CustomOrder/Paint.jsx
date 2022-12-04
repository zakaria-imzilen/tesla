import { useDispatch, useSelector } from "react-redux";
import { toggleFeature } from "../../app/customOrderSlice";
import { BlackP, BlueP, GrayP, RedP, WhiteP } from "../images";

const Paint = ({ paint }) => {
  const customOrder = useSelector((state) => state.customOrder);
  const dispatch = useDispatch();

  return (
    <article className="d-flex flex-column align-content-center justify-content-center">
      <h3 className="text-center display-5 fw-regular">Paint</h3>

      <div className="my-4 d-flex gap-3 justify-content-center">
        <img
          onClick={() => dispatch(toggleFeature({ name: "paint", num: 0 }))}
          src={WhiteP}
          alt=""
          width="40"
        />
        <img onClick={() => dispatch(toggleFeature({ name: "paint", num: 1 }))} src={GrayP} alt="" width="40" />
        <img onClick={() => dispatch(toggleFeature({ name: "paint", num: 2 }))} src={BlueP} alt="" width="40" />
        <img onClick={() => dispatch(toggleFeature({ name: "paint", num: 3 }))} src={BlackP} alt="" width="40" />
        <img onClick={() => dispatch(toggleFeature({ name: "paint", num: 4 }))} src={RedP} alt="" width="40" />
      </div>
      <p className="text-center" key={paint[customOrder.paint].name}>
        <span className="text-dark">{paint[customOrder.paint].name} </span>
        <span className="text-secondary">
          {paint[customOrder.paint].price === 0 ? "Included" : "$" + paint[customOrder.paint].price}
        </span>
      </p>
    </article>
  );
};

export default Paint;
