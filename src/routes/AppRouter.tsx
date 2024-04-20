import LoginPage from "../pages/LoginPage";

const AppRouter = () => {
  return [
    {
      path: "/",
      element: <LoginPage />,
    },
  ];
};

export default AppRouter;
