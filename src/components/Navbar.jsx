/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-5 sticky">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/rooms"}>
          <li>Rooms</li>
        </Link>
        <Link to={"/my-bookings"}>
          <li>My-Bookings</li>
        </Link>
        <Link to={"/about-Us"}>
          <li>About-Us</li>
        </Link>
        <Link to={"/login"}>
          <li>login</li>
        </Link>
        <Link to={"/register"}>
          <li>register</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
