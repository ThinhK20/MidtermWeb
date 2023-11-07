import { RouteObject } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/error-page";
import App from "../App";
import LandingPage from "../components/LandingPage/landingPage";

export const routes: RouteObject[] = [
   {
      path: "/homepage",
      element: <App />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
   },
];
