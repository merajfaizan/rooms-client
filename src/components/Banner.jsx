import { Link } from "react-router-dom";
import roomImg from "../assets/r1.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${roomImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello Traveler</h1>
          <p className="mb-5">
            welcome to Rooms, here you will get Exclusive and amazing rooms
          </p>
          <Link to={"/rooms"} className="btn bg-[#1a1a1a] text-white ">
            Find Rooms
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
