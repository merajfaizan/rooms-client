import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderAndFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <>
      {noHeaderAndFooter || <Navbar />}
      <Outlet />
      {noHeaderAndFooter || <Footer />}
    </>
  );
};

export default Main;
