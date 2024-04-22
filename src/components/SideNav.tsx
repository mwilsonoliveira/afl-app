import Company from "../assets/icons/Company";
import PuzzlePiece from "../assets/icons/PuzzlePiece";
import logo from "../assets/logo.png";

const SideNav = () => {
  return (
    <div
      className="d-flex flex-column align-align-items-center border-end border-light-subtle"
      style={{ width: "340px" }}
    >
      <div className="d-flex justify-content-center">
        <img
          src={logo}
          style={{ width: "172px", height: "auto", marginTop: "50px" }}
        />
      </div>

      <div className="d-flex justify-content-center mt-4">
        <ul className="nav nav-pills d-flex flex-column w-100 m-4">
          <li className="nav-item mb-3">
            <a className="nav-link active" style={{ padding: "12px" }} href="#">
              <PuzzlePiece />
              <b style={{ marginLeft: "8px" }}>Dashboard</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ padding: "12px" }}
              aria-current="page"
              href="#"
            >
              <Company />
              <b style={{ marginLeft: "8px" }}>Empresas</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
