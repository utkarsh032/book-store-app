import Banner from "../components/Banner";
import BestSellerBook from "./BestSellerBooks";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBook />
      <FavBook />
      <PromoBanner />
    </div>
  );
};

export default Home;
