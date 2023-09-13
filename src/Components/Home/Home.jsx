import React from 'react';
import "../Home/Home.css";

const Home = () => {
  return (
    <>
    <div className='home'>
        <div className='content'>
            <p className='first-para'>Hi, my name is</p>
            <h2 className='name-tag'>Muniba Rahman</h2>
            <h3 className='tag-line'>I build Front-end Websites</h3>
            <p className='intro-line'>Let have an Introduction!</p>
            <p className='intro-para'>I'm an undergrad Final Year student of Computer & Informartion Systems Engineering at NED University of Engineering & Technology. Bringing creativity into coding is an art with skills</p>
            <button type="button" class="resume-btn"><a href='Muniba Rahman - Resume.pdf' download="Muniba Rahman - Resume.pdf">Resume<i class="fa-solid fa-arrow-down"></i></a></button>
        </div>
        <div className='picture'>
          <img src='image-2.png' alt=''/>
        </div>
    </div>
    </>
  )
}

export default Home;