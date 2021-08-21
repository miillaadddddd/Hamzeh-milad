import { Fragment } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper's Controller component
SwiperCore.use([Navigation]);

const CustomSlider = ({ data = [], ...otherSwiperProps }) => {
  return (
    <Fragment>
      <Swiper
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        index={0}
        navigation
        allowSlideNext={true}
        {...otherSwiperProps}
      >
        {data?.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default CustomSlider;
