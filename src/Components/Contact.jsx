import React from 'react'
import contacttext from "../images/contacttext.svg"
import atwo from "../images/atwo.jpg"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import {IoLogoLinkedin} from "react-icons/io"
import {MdLocationOn} from "react-icons/md"
import {BsPhoneFill} from "react-icons/bs"


const Contact = () => {
  return (
   <>
       <img id="contact" className='w-[95%] md:w-[80%] lg:w-[70%] xl:w-[50%] m-auto mt-24 md:mt-28 lg:mt-36' src={contacttext} alt={contacttext} />

        {/* contact section main div */}
            <div className='flex mt-8 flex-col md:flex-row md:justify-evenly md:items-center justify-center'>

                <img className='w-[90%] md:w-[45%] lg:w-[30%] xl:w-[25%] rounded-tr-full rounded-tl-full m-auto' src={atwo} alt={atwo} />

                <div className='md:w-[40%] md:flex-col md:items-center md:justify-center'>
                    <h1 className='text-[#E1B7D8] text-center text-3xl md:text-4xl md:text-start mt-10 font-bold'>LEARN TOGETHER AND GROW TOGETHER</h1>
                    
                    {/* div for social icons */}
                    <div className='flex ml-10 md:ml-0 mt-10 md:justify-start w-[70%] justify-evenly'>
                        <a href="https://www.instagram.com/suryansh__2001/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className='text-3xl text-[#E1B7D8]' /></a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><AiOutlineGithub className='text-3xl md:ml-3 text-[#E1B7D8]' /></a>
                        <a href="https://www.linkedin.com/in/suryansh-tomar-a84747224/"  target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className='text-3xl md:ml-3 text-[#E1B7D8]' /></a>
                    </div>

                    <hr className='text-[#E1B7D8] ml-6 md:ml-0 w-[90%] md:mt-8 mt-4'/>
                    {/* div for location */}
                    <div className='flex w-[90%] md:justify-start items-center justify-center'>
                        <MdLocationOn className='text-3xl mt-4 text-[#E1B7D8]'/>
                        <p className='text-white text-xl mt-2 ml-2'>Chitkara University</p>
                    </div>

                    {/* div for phone-no */}
                    <div  className='flex w-[90%] md:justify-start items-center justify-center'>
                        <BsPhoneFill className='text-3xl mt-4 text-[#E1B7D8]'/>
                        <p className='text-white text-xl mt-2 ml-2'>8168930702</p>
                    </div>

                    <hr className='text-[#E1B7D8] ml-6 md:ml-0 w-[90%] md:mt-8 mt-4'/>

                    <p className='text-center md:text-start text-white pb-4 text-md mt-6'>copy rights @ myselfsuryansh2001@gmail.com</p>

                </div>


            </div>

   </>
  );
}

export default Contact
