import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "react-rating-stars-component";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const axiosSecure = useAxiosSecure();
  const [room, setRoom] = useState(null);
  const [bookingDate, setBookingDate] = useState(new Date());
  const [isRoomAvailable, setIsRoomAvailable] = useState(true);

  // Fetch room details based on the roomId
  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axiosSecure.get(`/rooms/${roomId}`);
        setRoom(response.data);
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };

    fetchRoomDetails();
  }, [axiosSecure, roomId]);

  // Check room availability when the date changes
  useEffect(() => {
    const checkRoomAvailability = async () => {
      try {
        const response = await axiosSecure.post("/checkAvailability", {
          roomId,
          bookingDate: bookingDate.toISOString().split("T")[0],
        });

        setIsRoomAvailable(response.data.available);
      } catch (error) {
        console.error("Error checking room availability:", error);
      }
    };

    checkRoomAvailability();
  }, [axiosSecure, roomId, bookingDate]);

  const handleBookNow = async () => {
    try {
      const response = await axiosSecure.post("/bookRoom", {
        roomId,
        bookingDate: bookingDate.toISOString().split("T")[0],
      });

      Swal.fire({
        icon: "success",
        title: "Room Booked!",
        text: "You have successfully booked the room.",
      });
      navigate("/my-bookings");

      // Handle success, update UI or show a success message
      console.log(response.data.message);
    } catch (error) {
      console.error("Error booking room:", error);
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: "An error occurred while booking the room. Please try again.",
      });
    }
  };

  if (!room) {
    return <div>Loading...</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="px-5 my-8 grid grid-cols-4 overflow-hidden">
      <div className="col-span-4">
        <Slider {...sliderSettings}>
          {room.roomImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Room ${index + 1}`}
              className="w-full h-screen object-cover rounded"
            />
          ))}
        </Slider>
      </div>
      <div className="col-span-4 md:col-span-3">
        <h2 className="text-3xl font-bold mt-10 mb-4">{room.title}</h2>

        {/* Room Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              <span className="text-xl font-semibold">Details:</span>{" "}
              {room.description}
            </p>
            <p className="text-gray-600">
              <span className="text-lg font-semibold">Price per Night:</span> $
              {room.pricePerNight}
            </p>
            <p className="text-gray-600">
              <span className="text-lg font-semibold">Room Size:</span>{" "}
              {room.roomSize}
            </p>
          </div>
        </div>

        {/* Special Offers */}
        {room.specialOffers && (
          <div className="mb-4">
            <p className="text-lg font-bold mb-2">Special Offers:</p>
            <ul className="list-disc list-inside">
              {room.specialOffers.map((offer, index) => (
                <li key={index} className="text-gray-600">
                  {offer}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Reviews */}
        <div className="mb-4 max-w-sm">
          <h3 className="text-xl font-bold mb-4">Reviews:</h3>
          {room.reviews.length > 0 ? (
            <Slider {...testimonialSliderSettings} className="gap-5">
              {room.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 m-10 shadow-md max-w-xs"
                >
                  <div className="mb-4">
                    <Rating
                      count={5}
                      size={24}
                      value={review.rating}
                      activeColor="#f8d867"
                      inactiveColor="#ddd"
                      edit={false}
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    <i className="fas fa-quote-left text-2xl mr-2"></i>
                    {review.comment}
                    <i className="fas fa-quote-right text-2xl ml-2"></i>
                  </p>
                  <p className="text-gray-600">{review.name}</p>
                  <p className="text-gray-500">{review.timestamp}</p>
                </div>
              ))}
            </Slider>
          ) : (
            <p>No Review Available For This Room </p>
          )}
        </div>
      </div>

      {/* Book Now Section */}
      <div className="col-span-4 md:col-span-1 mt-10">
        <h3 className="text-xl font-bold mb-2">Book Now</h3>
        <label>Select Date: </label>
        <DatePicker
          selected={bookingDate}
          onChange={(date) => setBookingDate(date)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        {isRoomAvailable ? (
          <div>
            {/* Summary Section */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Summary:</h4>
              <p>Date: {bookingDate.toDateString()}</p>
              <p>Price per Night: ${room.pricePerNight}</p>
              <p>Room Size: {room.roomSize}</p>
            </div>

            {/* Book Now Button */}
            <button
              onClick={handleBookNow}
              className="bg-[#1a1a1a] text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Book Now
            </button>
          </div>
        ) : (
          <div>
            {/* Not Available Message */}
            <p className="text-red-500 mb-2">
              This room is not available on the selected date.
            </p>

            {/* Disabled Book Now Button */}
            <button
              className="bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed"
              disabled
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomDetails;
