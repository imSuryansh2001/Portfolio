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
          one="Hello i m Suryansh"
          two="I m from Karnal"
          three="Pursuing BCA from Chitkara University"
          four="Working in acm student chapter"
        />
        </SwiperSlide>

        <SwiperSlide className='p-3 mb-8 md:mb-12 lg:mb-16'> <Two
          one="Learning fullstack web development"
          two="Problem solving with data structures in C++"
          three="Web designing (Figma+Photoshop)"
          four="Eager to know about latest trends in market"
        />
        </SwiperSlide>

        <SwiperSlide className='p-3 mb-8 md:mb-12 lg:mb-16'> <Two
          one="I have made several solo's and team based projects"
          two="I like web development and its js libraries"
          three="work with other developers for exposure and experience"
          four="I believe in learning together and growing together"
        />
        </SwiperSlide>

        <SwiperSlide className='p-3 mb-8 md:mb-12 lg:mb-16'> <Two
          one="Tackathon - 2022 1st position"
          two="Design-o-tech - 2022 1st position"
          three="Participated in bootcamps to enhance my skills"
          four="Working on my capabilities and enhancing my skills"
        />
        </SwiperSlide>


      </Swiper>
    </>
  );
}

export default TwoCarousel;