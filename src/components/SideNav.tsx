import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Company from "../assets/icons/Company";
import PuzzlePiece from "../assets/icons/PuzzlePiece";
import logo from "../assets/logo.png";

const SideNav = () => {
  const { pathname } = useLocation();

  const [navItems] = useState([
    {
      name: "Dashboard",
      linkTo: "/home",
      icon: <PuzzlePiece />,
    },
    {
      name: "Empresas",
      linkTo: "/empresas",
      icon: <Company />,
    },
  ]);

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
          {navItems.map((item, index) => (
            <li key={index} className="nav-item mb-3">
              <Link
                to={item.linkTo}
                className={`nav-link ${
                  pathname === item.linkTo ? "active" : ""
                }`}
                style={{ padding: "12px" }}
              >
                {item.icon}
                <b style={{ marginLeft: "8px" }}>{item.name}</b>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
