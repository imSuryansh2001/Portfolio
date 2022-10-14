import React from 'react'
import html from "../skills/html.svg"
import css from "../skills/css.svg"
import javascript from "../skills/javascript.svg"
import bootstrap from "../skills/bootstrap.svg"
import tailwind from "../skills/tailwind.png"
import react from "../skills/react.svg"
import "./Skills.css"

const Technical = () => {
  return (
    <>
        {/* technical skills main div */}
        <div className='flex w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] m-auto flex-wrap justify-evenly'>
            <img className='h-[4rem] md:h-[6rem] mx-4 mt-12 md:mt-16 w-[4rem] md:w-[6rem]'src={html} alt={html} />
            <img className='h-[4rem] md:h-[6rem] mx-4 mt-12 md:mt-16 w-[4rem] md:w-[6rem]'src={css} alt={css} />
            <img className='h-[4rem] md:h-[6rem] mx-4 mt-12 md:mt-16 w-[4rem] md:w-[6rem]'src={javascript} alt={javascript} />
            <img className='h-[4rem] md:h-[6rem] mx-4 mt-12 md:mt-16 w-[4rem] md:w-[6rem]'src={bootstrap} alt={bootstrap} />
            <img className='h-[4rem] md:h-[6rem] mx-4 mt-12 md:mt-16 w-[4rem] md:w-[6rem]'src={tailwind} alt={tailwind} />
            <img id="react-logo" className='h-[4rem] md:h-[6rem] mx-4 mt-12 md:mt-16 w-[4rem] md:w-[6rem]'src={react} alt={react} />
        </div>
    </>
  );
}

export default Technical