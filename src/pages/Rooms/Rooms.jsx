import { useState, useEffect } from "react";
import RoomCard from "../../components/RoomCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

const Rooms = () => {
  const axiosPublic = useAxiosPublic();

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

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
      } finally {
        setLoading(false);
      }
    };

    // Fetch rooms when component mounts and when filter values change
    fetchRooms();
  }, [minPrice, maxPrice, axiosPublic]);

  return (
    <div className="px-5 my-8">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Find Rooms | Rooms </title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-4">Available Rooms</h2>

      {/* Filter section */}
      <div className="mb-4">
        <label className="text-lg font-bold mb-2">Filter by Price Range:</label>
        <div className="flex items-center">
          <div className="flex-1 mr-4">
            <label htmlFor="minPrice" className="block text-sm text-gray-600">
              Min Price: ${minPrice}
            </label>
            <input
              id="minPrice"
              type="range"
              min={0}
              max={1000}
              step={1}
              value={minPrice}
              onChange={(e) => setMinPrice(parseInt(e.target.value))}
              className="range"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="maxPrice" className="block text-sm text-gray-600">
              Max Price: ${maxPrice}
            </label>
            <input
              id="maxPrice"
              type="range"
              min={0}
              max={1000}
              step={1}
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="range"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Rooms;
