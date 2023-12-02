// data

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { SwiperSlide, Swiper } from 'swiper/react';
//import swiper styles

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

function WorkSlider() {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[240px] sm:h-[480px] xl:h-full"
    >
  
    </Swiper>
  );
}

export default WorkSlider;
