import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import "./Order.css";

import OrderCard from "./OrderCard";
import img1 from "./img-1.jpg";
import img2 from "./img-2.jpg";
import img3 from "./img-3.jpg";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function Order() {
    const [swiperRef, setSwiperRef] = useState(null);

    //   let appendNumber = 4;
    //   let prependNumber = 1;

    //   const prepend2 = () => {
    //     swiperRef.prependSlide([
    //       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    //       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    //     ]);
    //   };

    //   const prepend = () => {
    //     swiperRef.prependSlide(
    //       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    //     );
    //   };

    //   const append = () => {
    //     swiperRef.appendSlide(
    //       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    //     );
    //   };

    //   const append2 = () => {
    //     swiperRef.appendSlide([
    //       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    //       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    //     ]);
    //   };

    return (
        <section id="order-section">
            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                // navigation={{
                //     enabled : true
                // }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide> <OrderCard src={img1} name='red velvet' price={'1000 /.'} /> </SwiperSlide>
                <SwiperSlide> <OrderCard src={img2} name='red velvet' price={'1000 /.'} /> </SwiperSlide>
                <SwiperSlide> <OrderCard src={img2} name='red velvet' price={'1000 /.'} /> </SwiperSlide>
                <SwiperSlide> <OrderCard src={img2} name='red velvet' price={'1000 /.'} /> </SwiperSlide>
                <SwiperSlide> <OrderCard src={img2} name='red velvet' price={'1000 /.'} /> </SwiperSlide>
                <SwiperSlide> <OrderCard src={img2} name='red velvet' price={'1000 /.'} /> </SwiperSlide>
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
