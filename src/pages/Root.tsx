import logo from "../assets/logo.png";
import Company from "../assets/icons/Company";
import PuzzlePiece from "../assets/icons/PuzzlePiece";

const Root = () => {
  return (
    <div className="d-flex flex-row vw-100">
      <div
        className="d-flex flex-column vh-100 align-align-items-center"
        style={{ width: "300px" }}
      >
        <div className="d-flex justify-content-center">
          <img
            src={logo}
            style={{ width: "172px", height: "auto", marginTop: "50px" }}
          />
        </div>

        <div className="d-flex p-2 justify-content-center">
          <ul
            className="nav nav-pills d-flex flex-column"
            style={{ width: "260px" }}
          >
            <li className="nav-item my-3">
              <a className="nav-link" href="#" style={{ padding: "12px" }}>
                <PuzzlePiece />
                <b style={{ marginLeft: "8px" }}>Dashboard</b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{ padding: "12px" }}
              >
                <Company />
                <b style={{ marginLeft: "8px" }}>Empresas</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column bg-danger w-75">
        <div className="d-flex flex-row w-100 bg-black py-5">aaaa</div>
      </div>
    </div>
  );
};

export default Root;
