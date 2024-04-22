import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ErrorPage, HomePage, LoginPage, Root } from "../pages";
import { useAuth } from "../context";

const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <Root /> : <LoginPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/empresas",
        },
      ],
    },
    {
      path: "/login",
      element: isAuthenticated ? <Navigate to="/" /> : <LoginPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
