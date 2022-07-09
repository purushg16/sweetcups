import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';

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

  const [cakes, fetchCakes] = React.useState([])
  const [loaded, isloaded] = React.useState(false)

  const getData = async () => {
    fetch('https://sweetcups-server.herokuapp.com/cakeDetails')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchCakes(res)
      })
  }

  React.useEffect(() => {
    if (cakes.length !== 0) {
      isloaded(true);
    }
    getData()
  }, [cakes])

  // const data = {
  //   name: 'red velvet',
  //   price1: '1,200',
  //   price2: '1,340'
  // }

  // const name = 'red velvet'
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

        {
          loaded ?
            (cakes.map((cake) => (
              <SwiperSlide>
                <Link to={`/cakes/${cake.cakeName}`} state={cake} >
                  <OrderCard src={img1} name={cake.cakeName} price={'1000 /.'} />
                </Link>
              </SwiperSlide>))) :
            (


              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <Skeleton
                      sx={{ bgcolor: 'grey.900' }}
                      variant="rectangular"
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <Skeleton
                      sx={{ bgcolor: 'grey.900' }}
                      variant="rectangular"
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <Skeleton
                      sx={{ bgcolor: 'grey.900' }}
                      variant="rectangular"
                    />
                  </div>
                </div>
              </div>
            )
        }




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
