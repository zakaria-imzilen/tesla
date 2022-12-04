import { BlackP, CreamP, WhiteP } from "../images";
import { useDispatch, useSelector } from "react-redux";
import { toggleFeature } from "../../app/customOrderSlice";

const Interior = ({ interior }) => {
  const customOrder = useSelector((state) => state.customOrder);
  const dispatch = useDispatch();

  const renderInteriorColors = (name) => {
    console.log(name);
    switch (name) {
      case "Black and White":
        return WhiteP;
      case "Cream":
        return CreamP;
      case "All Black":
        // All black
        return BlackP;
    }
  };

  return (
    <article className="interior d-flex flex-column align-content-center justify-content-center">
      <h3 className="text-center display-5 fw-regular">Interior</h3>

      <div className="my-4 d-flex gap-3 justify-content-center">
        {interior.map((int) => {
          return (
            <img
              key={int.id}
              src={renderInteriorColors(int.name)}
              alt={int.name}
              width="40"
              draggable={false}
              onClick={() =>
                dispatch(toggleFeature({ name: "interior", num: int.id }))
              }
            />
          );
        })}
      </div>
      <p className="text-center" key={customOrder.interior}>
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
