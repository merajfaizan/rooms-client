import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../pages/Rooms/RoomDetails/RoomDetails";
import NotFound from "../pages/NotFound/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/rooms/:roomId",
        element: <RoomDetails />,
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
