import { RouteObject } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/error-page";
import App from "../App";
import UserProfile from "../components/UserProfile/user-profile";
import Login from "../components/Login/login";
import SignUp from "../components/SignUp/signup";
import LandingPage from "../components/LandingPage/landing-page";

export const routes: RouteObject[] = [
   {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/landing-page",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/user-profile",
      element: <UserProfile />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/signin",
      element: <Login />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/signup",
      element: <SignUp />,
      errorElement: <ErrorPage />,
   },
];
