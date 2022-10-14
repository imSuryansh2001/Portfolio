import React from 'react'
import databse from "../skills/database.svg"
import computer from "../skills/computer.svg"
import dsalgo from "../skills/dsalgo.jpg"
import "./Skills.css"

const Other = () => {
    return (
        <>
            {/* soft skills div */}
            <div className='flex w-[80%] m-auto flex-wrap justify-evenly items-center'>
                <img className='h-[4rem] md:h-[6rem] rounded-2xl mx-4 mt-12 md:mt-16 w-[8rem] md:w-[12rem]' src={dsalgo} alt={dsalgo} />
                <img className='h-[4rem] md:h-[6rem] mx-4 mt-12 md:mt-16 w-[4rem] md:w-[6rem]' src={databse} alt={databse} />
                <img className='h-[4rem] md:h-[6rem] mx-4 mt-12 md:mt-16 w-[4rem] md:w-[6rem]' src={computer} alt={computer} />
            </div>
        </>
    );
}

export default Other