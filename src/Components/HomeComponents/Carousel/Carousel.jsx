import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

import CarouselCard from "./CarouselCard/CarouselCard";

import "./styles.css";

// install Swiper modules
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