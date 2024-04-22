import Person from "../assets/icons/Person";
import { useAuth } from "../context";

const Header = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    const confirmLogout = window.confirm(`Tem certeza que deseja sair?`);

    if (!confirmLogout) {
      return;
    }

    logout();
  };

  return (
    <div
      className="d-flex flex-row w-100 border-bottom border-light-subtle justify-content-end align-items-center"
      style={{ height: "72px" }}
    >
      <div
        className="d-flex bg-primary me-5 rounded-circle overflow-hidden justify-content-center align-items-center"
        style={{ width: "40px", height: "40px", cursor: "pointer" }}
        onClick={() => handleLogout()}
      >
        <Person />
      </div>
    </div>
  );
};

export default Header;
