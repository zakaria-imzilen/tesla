import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import { firstT, secondT, thirdT, fourthT } from "./components/images";
import Navbar from "./components/Navbar";
import "../css/testdrive.css";

const Testdrive = () => {
  const [imgChoosen, setImgChoosen] = useState(1);

  const btn1 = useRef(null);
  const btn2 = useRef(null);
  const btn3 = useRef(null);
  const btn4 = useRef(null);

  const renderImg = () => {
    switch (imgChoosen) {
      case 1:
        return <img src={firstT} className="w-100" />;
      case 2:
        btn2.current.classList.add("border", "border-primary", "border-2");
        return <img src={secondT} className="w-100" />;
      case 3:
        btn3.current.classList.add("border", "border-primary", "border-2");
        return <img src={thirdT} className="w-100" />;
      case 4:
        btn4.current.classList.add("border", "border-primary", "border-2");
        return <img src={fourthT} className="w-100" />;
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
      </main>

      <Footer fixedBottom={false} />
    </div>
  );
};

export default Testdrive;
