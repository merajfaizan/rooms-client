import { useState, useEffect, useCallback } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import BookingCard from "../../components/BookingCard";

const MyBookings = () => {
  const axiosSecure = useAxiosSecure();
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyBookings = useCallback(async () => {
    try {
      const response = await axiosSecure.get("/my-bookings");
      setMyBookings(response?.data);
    } catch (error) {
      console.error("Error fetching my bookings:", error);
    } finally {
      setLoading(false);
    }
  }, [axiosSecure]);

  // Save myBookings to local storage whenever it changes
  useEffect(() => {
    if (myBookings) {
      localStorage.setItem("myBookings", JSON.stringify(myBookings));
    }
  }, [myBookings]);

  useEffect(() => {
    // Try to load data from local storage
    const storedBookings = JSON.parse(localStorage.getItem("myBookings"));
    if (storedBookings.length) {
      setMyBookings(storedBookings);
      setLoading(false); // Set loading to false when using local storage
    }

    // Fetch user's booked data
    fetchMyBookings();
  }, [fetchMyBookings]);

  const handleUpdateBooking = (bookingId) => {
    // Logic for updating the booking (if needed)
    console.log("Update Booking:", bookingId);
  };

  // Logic for canceling the booking
  const handleCancelBooking = async (bookingId) => {
    try {
      // Call the cancel booking API
      await axiosSecure.delete(`/cancel-booking/${bookingId}`);

      // Update the local state to reflect the cancellation
      setMyBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.roomId !== bookingId)
      );
    } catch (error) {
      console.error("Error cancelling booking:", error.response.data.message);
      const errMassage =
        error.response.data.message ||
        " An error occurred while cancelling the booking.";
      throw new Error(errMassage);
    }
  };

  return (
    <div className="px-5">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : myBookings?.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myBookings.map((booking, index) => (
            <BookingCard
              key={index}
              booking={booking}
              handleUpdateBooking={handleUpdateBooking}
              handleCancelBooking={handleCancelBooking}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
