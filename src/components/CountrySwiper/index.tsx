import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import React from 'react';
import { CountrySlide } from '../CountrySlide';
import { Box } from '@chakra-ui/react';

SwiperCore.use([Navigation, Pagination]);

export function CountrySwiper (){
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide><Box width="100px" height="100px" backgroundImage="./bannerbackfround.png" w="100%"  backgroundRepeat="no-repeat" backgroundSize="cover"></Box></SwiperSlide>
      <SwiperSlide>Asia</SwiperSlide>
      <SwiperSlide>Europa</SwiperSlide>
      <SwiperSlide>Oceania</SwiperSlide>
    </Swiper>
  );
};