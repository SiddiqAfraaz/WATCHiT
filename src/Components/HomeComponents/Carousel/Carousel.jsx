import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

import CarouselCard from "./CarouselCard/CarouselCard";

import "./styles.css";

SwiperCore.use([Autoplay, Navigation]);

function Carousel({ movies }) {
    return (
        <>
            <Swiper spaceBetween={0} centeredSlides={true} autoplay={{
                "delay": 10000,
                "disableOnInteraction": false
            }} navigation={false}
                loop={true} className="mySwiper">
                {movies.map((movie, index) =>
                (<SwiperSlide key={index}>
                    <CarouselCard movie={movie} />
                </SwiperSlide>)
                )}
            </Swiper>
        </>
    );
}

export default Carousel;