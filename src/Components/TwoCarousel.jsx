import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./TwoCarousel.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import Two from './Two';


const TwoCarousel = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper

        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='p-3 mb-8 md:mb-12 lg:mb-16'> <Two
          one="BILL PAYMENTS , BILL TRANSFER ,QR PAYMENTS"
          two="CREDIT CARD PAYMENT AND ORDER FOOD MORE"
          three="GET YOUR MONEY TO MOVE SIMPLE TO USE"
          four="BOOST YOUR SAVING WITH RIGHT CREDIT CARD"
        />
        </SwiperSlide>

        <SwiperSlide className='p-3 mb-8 md:mb-12 lg:mb-16'> <Two
          one="BILL PAYMENTS , BILL TRANSFER ,QR PAYMENTS"
          two="CREDIT CARD PAYMENT AND ORDER FOOD MORE"
          three="GET YOUR MONEY TO MOVE SIMPLE TO USE"
          four="BOOST YOUR SAVING WITH RIGHT CREDIT CARD"
        />
        </SwiperSlide>

        <SwiperSlide className='p-3 mb-8 md:mb-12 lg:mb-16'> <Two
          one="BILL PAYMENTS , BILL TRANSFER ,QR PAYMENTS"
          two="CREDIT CARD PAYMENT AND ORDER FOOD MORE"
          three="GET YOUR MONEY TO MOVE SIMPLE TO USE"
          four="BOOST YOUR SAVING WITH RIGHT CREDIT CARD"
        />
        </SwiperSlide>

        <SwiperSlide className='p-3 mb-8 md:mb-12 lg:mb-16'> <Two
          one="BILL PAYMENTS , BILL TRANSFER ,QR PAYMENTS"
          two="CREDIT CARD PAYMENT AND ORDER FOOD MORE"
          three="GET YOUR MONEY TO MOVE SIMPLE TO USE"
          four="BOOST YOUR SAVING WITH RIGHT CREDIT CARD"
        />
        </SwiperSlide>


      </Swiper>
    </>
  );
}

export default TwoCarousel;