import Banner from "../components/Banner";
import FavoriteBook from "./FavoriteBook";

const Home = () => {
  return (
    <div>
      <div className="h-screen">
        <Banner />
      </div>
      <FavoriteBook />
    </div>
  );
};

export default Home;
