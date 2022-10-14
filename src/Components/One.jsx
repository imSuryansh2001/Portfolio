import React, { useState } from 'react'
import { BsList } from "react-icons/bs"
import a from "../images/a.jpg"
import Typed from 'react-typed';
import { FiX } from "react-icons/fi"
import "./One.css"
import { Link } from 'react-scroll';

const One = () => {

    const [nav, setNav] = useState(false);

    const handleHamburgerMenu = () => {
        setNav(!nav);
    }

    return (
        <>
            {/* nav section */}
            <nav className='flex h-[7vh] items-center rounded-bl-2xl rounded-br-2xl p-3 md:p-5 z-[2] fixed w-[100%] top-0 bg-[#402139] justify-between'>
                {/* hamburger div */}
                <div onClick={handleHamburgerMenu} >
                    {nav ? <FiX className="text-white lg:cursor-pointer text-2xl" /> : <BsList className='text-white lg:cursor-pointer text-2xl' />}

                </div>
               <Link to="contact" smooth={true} duration={2000}><p className='text-white lg:cursor-pointer'>Any Help !!!</p></Link>
            </nav>


            {/* nav menu side section */}
            {/* div for mobile */}
            <div id="transparent-nav" className={nav ? " ease-in-out duration-[1.5s] z-[2] fixed h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[55vh] rounded-bl-3xl rounded-br-3xl md:ml-[50%] lg:ml-[70%] xl:ml-[80%] md:rounded-bl-full mt-11 lg:mt-1  w-full md:w-[50%] lg:w-[30%] xl:w-[25%]" : "absolute left-[-100%]"}>

                <center>
                    <ul>
                       <Link to="about" smooth={true} duration={2000}><li className='mt-2 py-2 lg:cursor-pointer text-[#E1B7D8] text-lg'>About</li></Link>
                        <Link to="skills" smooth={true} duration={2000}><li className='mt-2 py-2 lg:cursor-pointer text-[#E1B7D8] text-lg'>Skills</li></Link>
                       <Link to="projects" smooth={true} duration={2000}><li className='mt-2 py-2 lg:cursor-pointer text-[#E1B7D8] text-lg'>Projects</li></Link>
                        <Link to="experience" smooth={true} duration={2000}><li className='mt-2 py-2 lg:cursor-pointer text-[#E1B7D8] text-lg'>Experience</li></Link>
                       <Link to="certificates" smooth={true} duration={2000}> <li className='mt-2 py-2 lg:cursor-pointer text-[#E1B7D8] text-lg'>Certificates</li></Link>
                       <Link to="contact" smooth={true} duration={2000}> <li className='mt-2 py-2 lg:cursor-pointer text-[#E1B7D8] text-lg'>Contact</li></Link>
                    </ul>
                </center>

            </div>
            {/* div for mobile */}



            {/* section one main div */}
            <div className='flex flex-col md:flex-row md:justify-evenly md:items-center md:mt-6 lg:mt-10'>

                {/* image section */}
                <div className='md:w-[45%] mt-28  lg:w-[50%]'>
                    <img className=' h-[52vh] rounded-tr-full rounded-tl-full
                     m-auto' src={a} alt={a} />
                </div>

                {/* text-section */}
                <div className='md:w-[45%] md:mt-20 lg:w-[50%]'>
                    <h1 className='text-[#E1B7D8] font-myFont text-5xl md:text-6xl lg:text-7xl mt-10 text-center  md:text-start'><Typed strings={['Hello I am Suryansh', 'From Karnal']} typeSpeed={120} backSpeed={50} loop /></h1>
                    <p className='text-white font-light text-2xl text-center mt-10 md:text-start'>I m focused , determined and always keen for learning.</p>
                    {/* buttons box */}
                    <div className='flex justify-center md:justify-start mt-10'>
                        <Link to="projects" smooth={true} duration={2000}><button className='bg-[#E1B7D8] mx-2 md:mx-0 font-light text-2xl rounded-full px-8 py-2 text-black' >Projects</button></Link>
                       <a href="https://www.linkedin.com/in/suryansh-tomar-a84747224/" target="_blank" rel="noopener noreferrer"><button className='bg-[#000000] mx-2 md:mx-0 md:ml-3 text-[#E1B7D8] border-solid border-[#E1B7D8] border-2 font-light text-2xl rounded-full px-8 py-2' >Linkedin</button></a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default One
