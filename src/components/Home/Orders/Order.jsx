import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import "./Order.css";

import OrderCard from "./OrderCard";
import img1 from "./img-1.jpg";
// import img2 from "./img-2.jpg";
// import img3 from "./img-3.jpg";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function Order() {

    const data = {
      name: 'red velvet',
      price1: '1,200',
      price2: '1,340'
    } 

    const name = 'red velvet'
    return (
        <section id="order-section">
            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                navigation={true}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1023: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide> <Link to={`/cakes/${name}`} state= {data} > <OrderCard src={img1} name='red velvet' price={'1000 /.'} /> </Link> </SwiperSlide>
                <SwiperSlide> <Link to={`/cakes/${name}`} state= {data} > <OrderCard src={img1} name='red velvet' price={'1000 /.'} /> </Link> </SwiperSlide>
                <SwiperSlide> <Link to={`/cakes/${name}`} state= {data} > <OrderCard src={img1} name='red velvet' price={'1000 /.'} /> </Link> </SwiperSlide>
                <SwiperSlide> <Link to={`/cakes/${name}`} state= {data} > <OrderCard src={img1} name='red velvet' price={'1000 /.'} /> </Link> </SwiperSlide>
            </Swiper>

            {/* <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
        </section>
    );
}
