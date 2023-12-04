import { Link } from "react-router-dom";
import promo1 from "../assets/promo1.jpg";
import promo2 from "../assets/promo2.jpg";

const Offers = () => {
  return (
    <div className="mb-4">
      <h1 data-aos="fade-up" className="text-center text-5xl py-4 border-y my-5 border-gray-700">Special Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex-1">
          <img className="w-full object-cover" src={promo1} alt="promo" />
        </div>
        <div className="flex-1"> 
          <img className="w-full object-cover" src={promo2} alt="promo" />
        </div>
      </div>
      <div className="flex justify-center my-5">
        <Link to={"/rooms"} className="btn bg-[#1a1a1a] text-white text-center">Book Now</Link>
      </div>
    </div>
  );
};

export default Offers;
