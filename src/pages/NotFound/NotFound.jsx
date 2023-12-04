import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found | Rooms </title>
      </Helmet>
      <img
        className="w-full h-96 object-contain"
        src="https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png"
        alt="notFound"
      />
      <Link to={"/"} className="btn bg-[#1a1a1a] text-white my-4 ">
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
