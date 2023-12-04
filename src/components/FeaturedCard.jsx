/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FeaturedCard = ({ room }) => {
  console.log(room);
  return (
    <div  className="bg-white p-4 shadow-md rounded-md">
      <Link to={`/rooms/${room._id}`}>
        <img
          src={room.roomImages[0]}
          alt={room.title}
          className="w-full h-40 object-cover mb-2 rounded-md"
        />
        <h3 className="text-lg font-bold mb-2">{room.title}</h3>
        <p className="text-gray-600 my-2">{room.description}</p>
        <p className="text-gray-600 my-2">Size: {room.roomSize}</p>
        <p className="text-gray-600 my-2">Offers: {room.specialOffers}</p>
        <p className="text-gray-600">Reviews: {room.reviews?.length}</p>
        <p className="text-gray-600 my-2 text-xl font-bold">
          ${room.pricePerNight.toFixed(2)} /Per Night
        </p>
      </Link>
      <Link className="btn bg-[#1a1a1a] text-white " to={`/rooms/${room._id}`}>
        Book Now
      </Link>
    </div>
  );
};

export default FeaturedCard;
