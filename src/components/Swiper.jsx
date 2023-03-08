import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import swiper from "../photo/bg.png"

export default function App2() {
  return (
    <div className="container">
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <img src={swiper} alt="" className="slider__img" />
          <h2 className="slider__title">
            Цивільні справи господарські справи допомога бізнесу
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper} alt="" className="slider__img" />
          <h2 className="slider__title">
            Податкові та митні спори сімейні справи податкові та митні спори
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper} alt="" className="slider__img" />
          <h2 className="slider__title">
            Цивільні справи господарські справи допомога бізнесу
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper} alt="" className="slider__img" />
          <h2 className="slider__title">
            Податкові та митні спори сімейні справи податкові та митні спори
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper} alt="" className="slider__img" />
          <h2 className="slider__title">
            Цивільні справи господарські справи допомога бізнесу
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
