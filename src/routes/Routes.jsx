import { createBrowserRouter } from "react-router-dom";
import UsersLayout from "../layouts/UsersLayout";
import App from "../App";
import Rooms from "../pages/rooms/Rooms";
import MyBookings from "../pages/my-bookings/MyBookings";
import AboutUs from "../pages/about-us/AboutUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <UsersLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <div>this is login page</div>,
  },
  {
    path: "/register",
    element: <div>this is register page</div>,
  },
  {
    path: "*",
    element: <div>404, Oops, this page is not found.</div>,
  },
]);

export default routes;
