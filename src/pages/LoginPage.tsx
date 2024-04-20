import { Container, LoginForm } from "../components";

const LoginPage = () => {
  return (
    <Container>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2 className="mb-4">Login</h2>
          <LoginForm />
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
