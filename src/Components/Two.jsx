import React from 'react'
import abouttext from "../images/abouttext.svg"

const Two = (props) => {
  return (
    <>
      
      <img id="about" className='mt-24 md:w-[70%] lg:w-[50%] m-auto md:mt-32 lg:mt-40' src={abouttext} alt={abouttext} />

      {/* main box */}
      <div className=' md:flex md:flex-row md:mt-10 md:justify-evenly md:items-center mb-6' data-aos="fade-right">
        <div>

          <div className='flex items-center mt-10'>

            <h1 className=' text-white pr-2 text-justify uppercase'> {props.one} </h1>
          </div>


          <div className='flex items-center mt-4 '>

            <h1 className=' text-white pr-2 text-justify uppercase'> {props.two} </h1>
          </div>

        </div>

        {/* <img className='hidden md:block md:mt-10' src={line} alt={line}/> */}

        <div className='md:px-3'>

          <div className='flex items-center  mt-4 md:mt-10'>

            <h1 className=' text-white pr-2 text-justify uppercase'> {props.three} </h1>
          </div>


          <div className='flex items-center  mt-4'>

            <h1 className=' text-white pr-2 text-justify uppercase'> {props.four} </h1>
          </div>

        </div>
      </div>
    </>
  );
}

export default Two;