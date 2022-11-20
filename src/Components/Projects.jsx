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

                <a href="https://book-api-project-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className='w-[5.2rem] md:w-[7rem] flex justify-center lg:hover:bg-[#e1b7d8] duration-[2s] lg:cursor-pointer items-center rounded-full mt-6 mx-2 border-[#E1B7D8] border-2 h-[5.2rem] md:h-[7rem] bg-[#000000]'>
                    <p className='text-white  lg:hover:text-black lg:text-2xl'>View</p>
                </div>
                </a>

                <a href="https://filter-gallery.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className='w-[5.2rem] md:w-[7rem] flex justify-center lg:hover:bg-[#e1b7d8] duration-[2s] lg:cursor-pointer items-center rounded-full mt-6 mx-2 border-[#E1B7D8] border-2 h-[5.2rem] md:h-[7rem] bg-[#000000]'>
                    <p className='text-white  lg:hover:text-black lg:text-2xl'>View</p>
                </div>
                </a>

                <a href="https://netflix-clone-two-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className='w-[5.2rem] md:w-[7rem] flex justify-center lg:hover:bg-[#e1b7d8] duration-[2s] lg:cursor-pointer items-center rounded-full mt-6 mx-2 border-[#E1B7D8] border-2 h-[5.2rem] md:h-[7rem] bg-[#000000]'>
                    <p className='text-white  lg:hover:text-black lg:text-2xl'>View</p>
                </div>
                </a>

            </div>


            {/* projects div */}
            <div className='flex mt-6 w-[95%] m-auto justify-evenly flex-wrap'>

                <a href="https://game-inspiration.netlify.app/" target="_blank" rel="noopener noreferrer">
                <div className='w-[5.2rem] md:w-[7rem] flex justify-center lg:hover:bg-[#e1b7d8] duration-[2s] lg:cursor-pointer items-center rounded-full mt-6 mx-2 border-[#E1B7D8] border-2 h-[5.2rem] md:h-[7rem] bg-[#000000]'>
                    <p className='text-white  lg:hover:text-black lg:text-2xl'>View</p>
                </div>
                </a>

                <a href="https://portfolio-seven-pi-66.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className='w-[5.2rem] md:w-[7rem] flex justify-center lg:hover:bg-[#e1b7d8] duration-[2s] lg:cursor-pointer items-center rounded-full mt-6 mx-2 border-[#E1B7D8] border-2 h-[5.2rem] md:h-[7rem] bg-[#000000]'>
                    <p className='text-white  lg:hover:text-black lg:text-2xl'>View</p>
                </div>
                </a>

                <a href="https://design-and-animation.netlify.app/" target="_blank" rel="noopener noreferrer">
                <div className='w-[5.2rem] md:w-[7rem] flex justify-center lg:hover:bg-[#e1b7d8] duration-[2s] lg:cursor-pointer items-center rounded-full mt-6 mx-2 border-[#E1B7D8] border-2 h-[5.2rem] md:h-[7rem] bg-[#000000]'>
                    <p className='text-white  lg:hover:text-black lg:text-2xl'>View</p>
                </div>
                </a>

            </div>
        </>
    );
}

export default Projects