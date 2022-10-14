import React from 'react'
import figma from "../skills/figma.svg"
import photoshop from "../skills/photoshop.svg"
import git from "../skills/git.svg"
import github from "../skills/github.svg"
import "./Skills.css"

const Soft = () => {
  return (
    <>
        {/* soft skills div */}
        <div className='flex w-[80%] m-auto flex-wrap justify-evenly'>
        <img className='h-[4rem] md:h-[6rem] mx-4 mt-12 md:mt-16 w-[4rem] md:w-[6rem]'src={figma} alt={figma} />
            <img className='h-[4rem] md:h-[6rem] mx-4 mt-12 md:mt-16 w-[4rem] md:w-[6rem]'src={photoshop} alt={photoshop} />
            <img className='h-[4rem] md:h-[6rem] mx-4 mt-12 md:mt-16 w-[4rem] md:w-[6rem]'src={git} alt={git} />
            <img className='h-[4rem] md:h-[6rem] mx-4 mt-12 md:mt-16 w-[4rem] md:w-[6rem]'src={github} alt={github} />
        </div>
    </>
  );
}

export default Soft