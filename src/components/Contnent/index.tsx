import SwiperCore, { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import React from "react";
import { Box } from "@chakra-ui/react";
import { ContnentSlug } from "../ContentSlug";

SwiperCore.use([Navigation, Pagination]);

export function Contnent() {
  return (
    <Box pt={6} sx={{ "--swiper-theme-color": "#FFBA08" }}>
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <ContnentSlug backgroundImageUrl="./europe.jpeg" heading="Europa" text="O continente mais antigo"/>
        </SwiperSlide>
        <SwiperSlide>
          <ContnentSlug backgroundImageUrl="./america.jpeg" heading="América" text="O continente mais hue br"/>
        </SwiperSlide>
        <SwiperSlide>
          <ContnentSlug backgroundImageUrl="./asia.jpeg" heading="Ásia" text="O continente mais 克艾和艾丝特"/>
        </SwiperSlide>
        <SwiperSlide>
          <ContnentSlug backgroundImageUrl="./africa.jpeg" heading="Africa" text="O continente mais pobre"/>
        </SwiperSlide>
        <SwiperSlide>
          <ContnentSlug backgroundImageUrl="./oceania.jpeg" heading="Oceania" text="O continente mais underrated"/>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
