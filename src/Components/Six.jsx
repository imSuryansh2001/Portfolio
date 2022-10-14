import React from 'react'
import certificates from "../images/certificates.svg"
import wone from "../images/wone.jpg"
import wtwo from "../images/wtwo.jpg"
// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Six = () => {
    return (
        <>
            <img id="certificates" className='w-[90%] md:w-[70%] lg:w-[40%] xl:mt-40 md:mt-32  m-auto mt-24' src={certificates} alt={certificates} />


            <Swiper className='w-[95%] md:w-[80%] xl:h-[70vh] xl:w-[70%] rounded-2xl mt-6'
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
                <SwiperSlide> <img src={wone} alt={wone} /> </SwiperSlide>
                <SwiperSlide> <img src={wtwo} alt={wtwo} /> </SwiperSlide>
                <SwiperSlide> <img src={wone} alt={wone} /> </SwiperSlide>
                <SwiperSlide> <img src={wtwo} alt={wtwo} /> </SwiperSlide>

            </Swiper>

        </>
    );
}

export default Six;
