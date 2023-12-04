import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { Helmet } from "react-helmet";

const Main = () => {
  const location = useLocation();
  const noHeaderAndFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Rooms </title>
      </Helmet>
      {noHeaderAndFooter || <Navbar />}
      <Outlet />
      {noHeaderAndFooter || <Footer />}
    </>
  );
};

export default Main;
