import { Link } from "react-router-dom";
import "../../css/section.css";

const Section = ({ data }) => {
  return (
    <section
      style={{ backgroundImage: `url(${data.img})`, height: (data.id === 4 ? "74vh": "100vh") }}
      className="container-fluid"
      id={`sec${data.id}`}
    >
      <div className="content d-flex flex-column justify-content-between">
        <div className="col text-center">
          <h1 className="display-2 mb-0">{data.title}</h1>
          <Link to="/testdrive" className="fs-6 text-center fw-bold">
            <u className="fw-semibold font-monospace">Schedule a test drive</u>
          </Link>
        </div>

        <Link className="row gap-2" to="/testdrive">
          <button className="btn btn-dark" type="button" id="">
            Custom Order
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Section;
