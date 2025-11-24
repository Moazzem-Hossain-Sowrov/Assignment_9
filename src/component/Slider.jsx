import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import i1 from '../assets/wintrDog.jpeg'

const Slider = () => {
   return (
      <div>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src="{i1}" alt="image"/></SwiperSlide>
            <SwiperSlide><img src="" alt="image" /></SwiperSlide>
            <SwiperSlide><img src="" alt="image" /></SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Slider;