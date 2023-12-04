/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const BookingCard = ({ booking, handleCancelBooking }) => {
  const MySwal = withReactContent(Swal);
  const [loading, setLoading] = useState(false);

  const onCancelBooking = () => {
    MySwal.fire({
      title: "Cancel Booking",
      text: "Are you sure you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        try {
          setLoading(true);
          await handleCancelBooking(booking.roomId);
          return true;
        } catch (error) {
          console.error("Error cancelling booking:", error);
          MySwal.showValidationMessage(`Error: ${error.message}`);
          return false;
        }
      },
    })
      .then((result) => {
        if (result.isConfirmed) {
          MySwal.fire(
            "Cancelled!",
            "Your booking has been cancelled.",
            "success"
          );
          // Additional logic after successful cancellation
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">
        {booking.roomDetails.title}
      </h3>
      <p className="text-gray-600 mb-2">{booking.bookingDate}</p>
      <p className="text-gray-600 mb-2">
        Price per Night: ${booking.roomDetails.pricePerNight}
      </p>
      <p className="text-gray-600 mb-4">
        Room Size: {booking.roomDetails.roomSize}
      </p>
      <button
        onClick={onCancelBooking}
        className={`bg-red-500 text-white px-4 py-2 rounded ${
          loading ? "cursor-not-allowed" : "hover:bg-red-700"
        }`}
        disabled={loading}
      >
        {loading ? "Cancelling..." : "Cancel Booking"}
      </button>
    </div>
  );
};

export default BookingCard;
