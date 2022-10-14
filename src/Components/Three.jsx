import React, { useState } from 'react'
import skillstext from "../images/Skillstext.svg"
import { BsListStars } from "react-icons/bs"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// import your route components too
import { MdClear } from "react-icons/md"
import Other from './Other'
import Technical from "./Technical"
import Soft from "./Soft"
import { Link } from 'react-router-dom';

const Three = () => {

  const [skills, setSkills] = useState(false);

  const handleSkills = () => {
    setSkills(!skills);
  }

  return (
    <>
      <img id="skills" className='m-auto h-[10vh] md:h-[15vh] lg:h-[17vh] mt-20 md:mt-28 lg:mt-32 ' src={skillstext} alt={skillstext} />

      <div onClick={handleSkills}>
        {skills ? <center><MdClear className='text-white mt-4 md:mt-6 text-2xl' /></center> : <center><BsListStars className='text-white mt-4 md:mt-6 text-2xl' /></center>}

      </div>

      <BrowserRouter>

        {/* skills div */}
        <div className={skills ? 'bg-[#E1B7D8] flex justify-evenly items-center ease-in-out duration-1000 mt-4 h-[7vh] m-auto rounded-2xl w-[95%]' : ""}>
          <Link to="/"><p className='text-xl text-center lg:cursor-pointer px-6 border-black border-r'>Technical Skills</p></Link>
          <Link to="soft"> <p className='text-xl text-center lg:cursor-pointer px-6 border-black border-r'>Soft Skills</p></Link>
          <Link to="other"> <p className='text-xl text-center lg:cursor-pointer px-6 border-black'>Other Skills</p></Link>
        </div>

        <Routes>
          <Route path="/" element={<Technical />} />
          <Route path="soft" element={<Soft />} />
          <Route path="other" element={<Other />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default Three