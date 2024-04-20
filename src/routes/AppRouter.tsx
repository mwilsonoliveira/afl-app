import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage, LoginPage } from "../pages";
import { useAuth } from "../context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
