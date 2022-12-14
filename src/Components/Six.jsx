import React from 'react'
import certificates from "../images/certificates.svg"
import htmlcss from "../certificates/htmlcss.jpg"
import skills from "../certificates/skills.png"
import tackathon from "../certificates/tackathon.jpeg"
import design from "../certificates/design.JPG"
import cplusplus from "../certificates/cplusplus.png"
// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./Six.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Six = () => {
    return (
        <>
            <img id="certificates" className='w-[90%] md:w-[70%] lg:w-[40%] xl:mt-40 md:mt-32  m-auto mt-24' src={certificates} alt={certificates} />


            <Swiper className='w-[95%] md:w-[80%] xl:h-[120vh] xl:w-[70%] rounded-2xl mt-6' data-aos="zoom-in-down"
                // install Swiper modules
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide> <img src={htmlcss} alt={htmlcss} /> </SwiperSlide>
                <SwiperSlide> <img src={tackathon} alt={tackathon} /> </SwiperSlide>
                <SwiperSlide> <img src={cplusplus} alt={cplusplus} /> </SwiperSlide>
                <SwiperSlide> <img src={design} alt={design} /> </SwiperSlide>
                <SwiperSlide> <img src={skills} alt={skills} /> </SwiperSlide>

            </Swiper>

        </>
    );
}

export default Six;
