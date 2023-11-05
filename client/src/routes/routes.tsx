import { RouteObject } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/error-page";
import App from "../App";

export const routes: RouteObject[] = [
   {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
   },
];
