import Person from "../assets/icons/Person";

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

export default Header;
