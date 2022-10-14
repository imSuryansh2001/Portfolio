import React from 'react'
import Contact from './Components/Contact';
import Five from './Components/Five';
import Four from './Components/Four';
import One from './Components/One';
import Six from './Components/Six';
import Three from './Components/Three';
import TwoCarousel from './Components/TwoCarousel';
import "./App.css"

const App = () => {
  return (
    <>

      <div class="context">
      <One />
      <TwoCarousel />
      <Three />
      <Four />
      <Five />
      <Six />
      <Contact />
      </div>


      <div class="area" >
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >


    </>
  );
}

export default App
