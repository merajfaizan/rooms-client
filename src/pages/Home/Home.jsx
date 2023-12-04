import { useEffect } from "react";
import Banner from "../../components/Banner";
import FeaturedRoom from "../../components/FeaturedRoom";
import NewsLetter from "../../components/NewsLetter";
import Offers from "../../components/Offers";
import PhotoGallary from "../../components/PhotoGallary";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="px-2 min-h-screen">
      <Banner />
      <PhotoGallary />
      <Offers />
      <FeaturedRoom />
      <NewsLetter />
    </div>
  );
};

export default Home;
