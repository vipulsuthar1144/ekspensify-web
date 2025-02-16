import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoutes from "./Protected.routes";
import AppLayout from "../layouts/App.layout";

const AppRoute = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: ProtectedRoutes,
    },
    {
      path: "*",
      element: <Navigate to={"/"} replace />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default AppRoute;
