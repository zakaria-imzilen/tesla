import "../../css/footer.css";

const Footer = ({ fixedBottom }) => {
  return (
    <footer
      className={`${
        fixedBottom && "position-absolute bottom-0"
      } container-fluid bg-light py-4 px-3 d-flex text-secondary justify-content-center`}
    >
      <h6 className="fw-semibold text-center">
        Tesla © {new Date().getFullYear()}
      </h6>
      <h6 className="fw-semibold text-center">Privacy & Legal</h6>
      <h6 className="fw-semibold text-center">Vehicle Recalls</h6>
      <h6 className="fw-semibold text-center">Careers</h6>
      <h6 className="fw-semibold text-center">News</h6>
    </footer>
  );
};

export default Footer;
