import { RouteObject } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/error-page";
import App from "../App";
import LandingPage from "../components/LandingPage/landingPage";

import UserProfile from "../components/UserProfile/user-profile";


export const routes: RouteObject[] = [
   {
      path: "/homepage",
      element: <App />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/user-profile",
      element: <UserProfile />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
   },
];
