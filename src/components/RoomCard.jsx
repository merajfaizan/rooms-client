/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <Link to={`/rooms/${room.id}`}>
        <img
          src={room.roomImages[0]}
          alt={room.title}
          className="w-full h-40 object-cover mb-2 rounded-md"
        />
        <h3 className="text-lg font-bold mb-2">{room.title}</h3>
        <p className="text-gray-600">
          ${room.pricePerNight.toFixed(2)} /Per Night
        </p>
        <p className="text-gray-600">Reviews: {room.reviews?.length}</p>
      </Link>
    </div>
  );
};

export default RoomCard;
