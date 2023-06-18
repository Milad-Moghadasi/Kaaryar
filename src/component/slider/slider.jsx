import "./slider.scss"
import { Swiper, SwiperSlide } from 'swiper/react'; 
// import { useRef } from 'react'; 
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from "../../img/slider/img1.png"
// import img2 from "../../img/slider/img2.png"
import img3 from "../../img/slider/img3.png"
import img4 from "../../img/slider/img4.png"
import img5 from "../../img/slider/img5.png"
import img6 from "../../img/slider/img6.png"

function Slider() {
  return (
    <div className="swiper container">
      <Swiper
        modules={[Navigation]}
        navigation
        speed={800}
        slidesPerView={1}
        className="swiperclass"
        >
        {/* <SwiperSlide>hello1</SwiperSlide>
        <SwiperSlide>hello2</SwiperSlide>
        <SwiperSlide>hello3</SwiperSlide> */}
        <SwiperSlide><img src={img1} alt="sliderimg" /></SwiperSlide>
        {/* <SwiperSlide><img src={img2} alt="sliderimg" /></SwiperSlide> */}
        <SwiperSlide><img src={img3} alt="sliderimg" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="sliderimg" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="sliderimg" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="sliderimg" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;