import React from 'react'
import experience from "../images/experience.svg"

const Five = () => {
    return (
        <>
            <img id="experience" className='w-[95%] md:w-[80%] lg:w-[70%] xl:w-[50%] m-auto mt-24 md:mt-28 lg:mt-36' src={experience} alt={experience} />

            {/* experience main box */}
            <div className='w-[95%] md:flex-row md:justify-evenly md:items-center flex flex-col m-auto mt-8'>
                <div className='w-[90%] lg:w-[20%] md:h-[20vh] md:flex md:items-center md:mt-20 md:w-[30%] border-2 rounded-2xl border-[#e1b7d8] m-auto mt-6'>
                    <p className='text-[#E1B7D8] text-lg p-4 md:text-center '>Working in ACM student chapter Chitkara (Web team)</p>
                </div>

                <div className='w-[90%] lg:w-[20%] md:h-[20vh] md:flex md:items-center md:w-[30%] border-2 rounded-2xl border-[#e1b7d8] m-auto mt-6'>
                    <p className='text-[#E1B7D8] text-lg p-4 md:text-center '>Solo learning is the fastest way to learn something new</p>
                </div>

                <div className='w-[90%] lg:w-[20%] md:h-[20vh] md:flex md:items-center md:mt-20 md:w-[30%] border-2 rounded-2xl border-[#e1b7d8] m-auto mt-6'>
                    <p className='text-[#E1B7D8] text-lg p-4 md:text-center '>Majority of my projects are solo , exploring is freedom</p>
                </div>
            </div>


            {/* experience main box */}
            <div className='w-[95%] md:flex-row md:justify-evenly md:items-center flex flex-col m-auto mt-8'>
                <div className='w-[90%] lg:w-[20%] md:h-[20vh] md:flex md:items-center md:mt-20 md:w-[30%] border-2 rounded-2xl border-[#e1b7d8] m-auto mt-6'>
                    <p className='text-[#E1B7D8] text-lg p-4 md:text-center '>I participated in several competitions to test my skills</p>
                </div>

                <div className='w-[90%] lg:w-[20%] md:h-[20vh] md:flex md:items-center md:w-[30%] border-2 rounded-2xl border-[#e1b7d8] m-auto mt-6'>
                    <p className='text-[#E1B7D8] text-lg p-4 md:text-center '>Work with latest trends and technonlogies always benefits you</p>
                </div>

                <div className='w-[90%] lg:w-[20%] md:h-[20vh] md:flex md:items-center md:mt-20 md:w-[30%] border-2 rounded-2xl border-[#e1b7d8] m-auto mt-6'>
                    <p className='text-[#E1B7D8] text-lg p-4 md:text-center '>Stick to one particular thing , you cant learn multiple at one time</p>
                </div>
            </div>
        </>
    );
}

export default Five