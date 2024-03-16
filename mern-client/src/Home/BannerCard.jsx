import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-cards";
import "./BannerCard.css";

const BannerCard = () => {
  return (
    <div className="banner">
      <Swiper effect="cards" grabCursor={true} className="mySwiper">
        <SwiperSlide>
          {/* Add content for the first slide */}
        </SwiperSlide>
        <SwiperSlide>
          {/* Add content for the second slide */}
        </SwiperSlide>
        <SwiperSlide>
          {/* Add content for the third slide */}
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
};

export default BannerCard;
