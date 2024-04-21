import logo from "../assets/logo.png";
import Company from "../assets/icons/Company";
import PuzzlePiece from "../assets/icons/PuzzlePiece";
import Person from "../assets/icons/Person";

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

      <div className="d-flex justify-content-center">
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

const Header = () => {
  return (
    <div
      className="d-flex flex-row w-100 border-bottom border-light-subtle justify-content-end align-items-center"
      style={{ height: "72px" }}
    >
      <div
        className="d-flex bg-primary me-5 rounded-circle overflow-hidden justify-content-center align-items-center"
        style={{ width: "40px", height: "40px" }}
      >
        <Person />
      </div>
    </div>
  );
};

const Root = () => {
  return (
    <div className="d-flex flex-row">
      <SideNav />
      <div className="d-flex flex-column w-100 vh-100">
        <Header />
      </div>
    </div>
  );
};

export default Root;
