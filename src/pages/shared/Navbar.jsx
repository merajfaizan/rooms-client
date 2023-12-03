import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/rooms"}>Rooms</Link>
      </li>
      <li>
        <Link to={"/my-bookings"}>My-bookings</Link>
      </li>
      {!user ? (
        <>
          <Link to={"/login"}>
            <button className="btn bg-[#1a1a1a] text-white font-medium block md:hidden ">
              Login
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="btn bg-[#1a1a1a] text-white font-medium block md:hidden ">
              Register
            </button>
          </Link>
        </>
      ) : (
        <button
          onClick={logOut}
          className="btn bg-[#1a1a1a] text-white font-medium block md:hidden "
        >
          Logout
        </button>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link
          to={"/"}
          className="text-xl flex justify-center items-center gap-2 h-12"
        >
          <img
            className="w-auto h-full"
            src="/logo-icon-black.png"
            alt="logo"
          />
          <span className="text-3xl font-semibold">Rooms</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <>
            <Link to={"/login"}>
              <button className="hidden md:block btn mr-2  bg-[#1a1a1a] text-white font-medium">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="hidden md:block btn bg-[#1a1a1a] text-white font-medium">
                Register
              </button>
            </Link>
          </>
        ) : (
          <button
            onClick={logOut}
            className="hidden md:block btn bg-[#1a1a1a] text-white font-medium"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
