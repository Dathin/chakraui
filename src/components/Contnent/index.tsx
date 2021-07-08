import SwiperCore, { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import React from "react";
import { Box, Link } from "@chakra-ui/react";
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
          <Link href="/contnents/europe">
            <ContnentSlug
              backgroundImageUrl="/europe.jpeg"
              heading="Europa"
              text="O continente mais antigo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/contnents/america">
            <ContnentSlug
              backgroundImageUrl="/america.jpeg"
              heading="América"
              text="O continente mais hue br"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/contnents/asia">
            <ContnentSlug
              backgroundImageUrl="/asia.jpeg"
              heading="Ásia"
              text="O continente mais 克艾和艾丝特"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/contnents/africa">
            <ContnentSlug
              backgroundImageUrl="/africa.jpeg"
              heading="Africa"
              text="O continente mais pobre"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/contnents/oceania">
            <ContnentSlug
              backgroundImageUrl="/oceania.jpeg"
              heading="Oceania"
              text="O continente mais underrated"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
