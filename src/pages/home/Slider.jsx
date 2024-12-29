
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from "@/assets/home/slide1.jpg"
import slide2 from "@/assets/home/slide2.jpg"
import slide3 from "@/assets/home/slide3.jpg"
import slide4 from "@/assets/home/slide4.jpg"
import slide5 from "@/assets/home/slide5.jpg"



export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='relative w-8/12'>
            <img src={slide1} alt="" />
            <h3 className='text-3xl uppercase text-center absolute top-[88%] left-[40%] text-white'>Salad</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative w-8/12'>
            <img src={slide2} alt="" />
            <h3 className='text-3xl uppercase text-center absolute top-[88%] left-[40%] text-white'>Pizza</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative w-8/12 '>
            <img src={slide3} alt="" />
            <h3 className='text-3xl uppercase text-center absolute top-[88%] left-[40%] text-white'>Soup</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative w-8/12'>
            <img src={slide4} alt="" />
            <h3 className='text-3xl uppercase text-center absolute top-[88%] left-[40%] text-white'>Dessert</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative w-8/12'>
            <img src={slide5} alt="" />
            <h3 className='text-3xl uppercase text-center absolute top-[88%] left-[40%] text-white'>Salad</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
