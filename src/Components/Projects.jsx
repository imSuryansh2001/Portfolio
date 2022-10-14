import React from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projects = () => {
    return (
        <>
            {/* projects div */}
            <div className='flex mt-10 w-[95%] m-auto justify-evenly flex-wrap'>

                <div className='w-[5.2rem] md:w-[7rem] flex justify-center lg:hover:bg-[#e1b7d8] duration-[2s] lg:cursor-pointer items-center rounded-full mt-6 mx-2 border-[#E1B7D8] border-2 h-[5.2rem] md:h-[7rem] bg-[#000000]'>
                    <p className='text-white  lg:hover:text-black lg:text-2xl'>View</p>
                </div>

                <div className='w-[5.2rem] md:w-[7rem] flex justify-center lg:hover:bg-[#e1b7d8] duration-[2s] lg:cursor-pointer items-center rounded-full mt-6 mx-2 border-[#E1B7D8] border-2 h-[5.2rem] md:h-[7rem] bg-[#000000]'>
                    <p className='text-white  lg:hover:text-black lg:text-2xl'>View</p>
                </div>

                <div className='w-[5.2rem] md:w-[7rem] flex justify-center lg:hover:bg-[#e1b7d8] duration-[2s] lg:cursor-pointer items-center rounded-full mt-6 mx-2 border-[#E1B7D8] border-2 h-[5.2rem] md:h-[7rem] bg-[#000000]'>
                    <p className='text-white  lg:hover:text-black lg:text-2xl'>View</p>
                </div>

            </div>


            {/* projects div */}
            <div className='flex mt-6 w-[95%] m-auto justify-evenly flex-wrap'>

                <div className='w-[5.2rem] md:w-[7rem] flex justify-center lg:hover:bg-[#e1b7d8] duration-[2s] lg:cursor-pointer items-center rounded-full mt-6 mx-2 border-[#E1B7D8] border-2 h-[5.2rem] md:h-[7rem] bg-[#000000]'>
                    <p className='text-white  lg:hover:text-black lg:text-2xl'>View</p>
                </div>

                <div className='w-[5.2rem] md:w-[7rem] flex justify-center lg:hover:bg-[#e1b7d8] duration-[2s] lg:cursor-pointer items-center rounded-full mt-6 mx-2 border-[#E1B7D8] border-2 h-[5.2rem] md:h-[7rem] bg-[#000000]'>
                    <p className='text-white  lg:hover:text-black lg:text-2xl'>View</p>
                </div>

            </div>
        </>
    );
}

export default Projects