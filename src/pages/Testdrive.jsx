import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Testdrive = () => {
  return (
    <div className="position-relative">
      <Navbar menuSte={true} />
      <Footer fixedBottom={true} />
    </div>
  );
};

export default Testdrive;
