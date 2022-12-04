import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../../app/customOrderSlice";

const Order = ({ name, month, year, carData }) => {
  const [alert, setAlert] = useState(false);

  const customOrder = useSelector((state) => state.customOrder);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleOrder = () => {
    const carFeaturesPrices = {
      basicPrice: carData.price[customOrder.wheelDrive].price,
      paint: carData.paint[customOrder.paint].price,
      wheels: carData.wheels[customOrder.wheels].price,
      interior: carData.interior[customOrder.interior].price,
    };
    dispatch(
      order({
        car: carFeaturesPrices,
        carName: carData.name,
        user: user.userLoggedInData
      })
    );
  };

  return (
    <article className="d-flex flex-column align-content-center justify-content-center">
      <h3 className="text-center display-5 fw-regular">Order your {name}</h3>
      <p className="text-secondary text-center">
        Est. Delivery: {month} {year}
      </p>
      <button className="btn btn-primary w-100" onClick={() => setAlert(true)}>
        Order your car
      </button>
      {alert && (
        <div
          className="alert alert-primary position-fixed top-50 start-50 translate-middle"
          role="alert"
        >
          Confirm your order by clicking this button below 👇🏻
          <br />
          <br />
          <button
            className="btn btn-success d-block w-100"
            onClick={handleOrder}
          >
            Confirm
          </button>
        </div>
      )}
    </article>
  );
};

export default Order;
