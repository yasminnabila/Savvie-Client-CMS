import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/Layout";
import LandingPage from "../views/LandingPage";
import LoginPage from "../views/LoginPage";
import RegisterPageA from "../views/RegisterPageA";
import RegisterPageB from "../views/RegisterPageB";
import RegisterPageC from "../views/RegisterPageC";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        // loader: () => {
        //   if (!localStorage.getItem("access_token")) throw redirect("/login");
        // },
      },
      {
        path: "/login",
        element: <LoginPage />,
        loader: () => {
          if (localStorage.getItem("access_token")) throw redirect("/");
        },
      },
    ],
  },
  {
    path: "/registerA",
    element: <RegisterPageA />,
  },
  {
    path: "/registerB",
    element: <RegisterPageB />,
  },
  {
    path: "/registerC",
    element: <RegisterPageC />,
  },
]);

export default router;
