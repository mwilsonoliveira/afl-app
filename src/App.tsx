import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context";
import { Header, SideNav, SubHeader } from "./components";
import { Dashboard, Empresas, LoginPage } from "./pages";
import Cadastro from "./pages/Cadastro";

const PrivateLayout = () => {
  const { isAuthenticated } = useAuth();

  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="d-flex flex-row">
      <SideNav />
      <div className="d-flex flex-column w-100 vh-100">
        <Header />
        <div className="container mt-5">
          <SubHeader withButton={location.pathname === "/empresas"} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="empresas" element={<Empresas />} />
          <Route path="empresas/cadastro" element={<Cadastro />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
