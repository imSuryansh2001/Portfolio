import React from 'react'
import projecttext from "../images/projecttext.svg"
import responsive from "../images/responsive.svg"
import "./Four.css"

// swiper dependencies
// import Swiper core and required modules
import { Navigation,Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/scrollbar';
import Projects from './Projects';


const Four = () => {
    return (
        <>
            {/* heading */}
            <img id="projects" className='mt-24 md:mt-36 lg:mt-36 w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] m-auto' src={projecttext} alt={projecttext} />

            {/* text and image box */}
            <div className='flex mt-6 lg:mt-10 flex-col md:flex-row md:justify-evenly lg:justify-around md:items-center justify-center w-[95%] m-auto'>

                <p className='text-white md:w-[45%] text-xl font-thin text-justify' data-aos="fade-up">I have made several projects till now  the majority of them were solo projects because at that time I was learning on my own. By the time I started exploring more and making team-based projects because learning never stops. </p>

                <img className='mt-10 md:w-[45%] ' data-aos="fade-up-left" src={responsive} alt={responsive} />

            </div>

            <Swiper className='md:w-[80%]'
                // install Swiper modules
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='text-white' data-aos="flip-left"> <Projects/> </SwiperSlide>
                <SwiperSlide className='text-white' data-aos="flip-right"> <Projects/> </SwiperSlide>
                <SwiperSlide className='text-white' data-aos="flip-left"> <Projects/> </SwiperSlide>
                
            </Swiper>

        </>
    );
}

export default Four