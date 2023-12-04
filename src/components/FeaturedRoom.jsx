import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import FeaturedCard from "./FeaturedCard";

const FeaturedRoom = () => {
  const axiosPublic = useAxiosPublic();
  const [rooms, setRooms] = useState();

  useEffect(() => {
    // Fetch rooms based on the current filter values
    const fetchRooms = async () => {
      try {
        const response = await axiosPublic.get("/featured");
        console.log(response.data);
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    // Fetch rooms when component mounts and when filter values change
    fetchRooms();
  }, [axiosPublic]);
  console.log(rooms);

  return (
    <div className="mb-4">
      <h1 data-aos="fade-down" className="text-center text-5xl py-4 border-y my-5 border-gray-700">Featured Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {rooms?.map((room) => {
          return <FeaturedCard key={room._id} room={room} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedRoom;
