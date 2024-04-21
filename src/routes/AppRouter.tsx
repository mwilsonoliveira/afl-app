import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage, LoginPage, Root } from "../pages";
import { useAuth } from "../context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/empresas",
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
