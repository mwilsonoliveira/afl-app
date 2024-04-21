import { Container, LoginForm } from "../components";
import logo from "../assets/logo.png";

const LoginPage = () => {
  return (
    <Container>
      <div className="d-flex flex-row h-100">
        <div className="d-flex flex-column w-50 bg-light align-items-center justify-content-center">
          <div>
            <img src={logo} />
          </div>
        </div>
        <div className="d-flex flex-column w-50 align-items-center justify-content-center">
          <div className="d-flex w-100 align-items-center justify-content-center">
            <div className="d-flex w-20"></div>
            <div className="d-flex w-50">
              <LoginForm />
            </div>
            <div className="d-flex w-20"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
