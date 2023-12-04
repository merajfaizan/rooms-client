import Banner from "../../components/Banner";
import FeaturedRoom from "../../components/FeaturedRoom";
import NewsLetter from "../../components/NewsLetter";
import Offers from "../../components/Offers";
import PhotoGallary from "../../components/PhotoGallary";

const Home = () => {
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
