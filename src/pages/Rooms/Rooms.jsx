import { useState, useEffect } from "react";
import RoomCard from "../../components/RoomCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Rooms = () => {
  const axiosPublic = useAxiosPublic();

  const [rooms, setRooms] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    // Fetch rooms based on the current filter values
    const fetchRooms = async () => {
      try {
        const response = await axiosPublic.get("/rooms", {
          params: {
            minPrice,
            maxPrice,
          },
        });

        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    // Fetch rooms when component mounts and when filter values change
    fetchRooms();
  }, [minPrice, maxPrice, axiosPublic]);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Available Rooms</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>

      {/* Price filter - You can implement this as per your requirements */}
      <div className="mt-8">
        <label className="text-lg font-bold">Filter by Price Range:</label>
        {/* Add your price range filter component here */}
      </div>
    </div>
  );
};

export default Rooms;
