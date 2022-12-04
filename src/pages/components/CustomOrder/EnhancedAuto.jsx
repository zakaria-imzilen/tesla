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
      <button
        disabled={customOrder.enhancedAutoPilot}
        onClick={() =>
          dispatch(
            toggleFeature({
              name: "enhancedAutoPilot",
              num: true,
            })
          )
        }
        className="my-3 btn btn-primary w-100 d-block m-auto"
      >
        Add
      </button>
      {customOrder.enhancedAutoPilot && (
        <button
          type="button"
          className="btn btn-danger"
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
        </button>
      )}
    </article>
  );
};

export default EnhancedAuto;
