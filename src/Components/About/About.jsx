import React from 'react';
import "./About.css";

const About = () => {
  return (
    <>
    <div className='about'>
    <div className='section1'>
        <div className='about-img'>
          <img src='about2.png' alt='' />
        </div>

        <div className='about-content'>
          <h2 className='about-heading'>About Me</h2>
          <p className='about-para'>Let's get to know about my skills in Front-end Development! I am profficient in HTML, CSS, JavaScript, Boostrap, Responsive Design, and Reactjs framework. I have a keen eye to details, project requirements and problem solving. As an eager learner, I am open for any opportunities for internships.</p>
          <div className='coding-lang'>
            <p id='html' className='p-icons'><i class="fa-brands fa-html5"></i></p>
            <p id='css' className='p-icons'><i class="fa-brands fa-css3-alt"></i></p>
            <p id='js' className='p-icons'><i class="fa-brands fa-square-js"></i></p>
            <p id='bootstrap' className='p-icons'><i class="fa-brands fa-bootstrap"></i></p>
            <p id='react' className='p-icons'><i class="fa-brands fa-react"></i></p>
          </div>
        </div>
        </div>

        <div className='section2'>
            <div className='about-content'>
                <h2 className='about-heading'>Education</h2>
                <h4 className='edu-heading'>Bachelor's</h4>
                <p className='edu-name'><span className='highlight'>Deg. Name:</span> Computer & Information Systems Engineering</p>
                <p className='edu-para'><span className='highlight'>Institute:</span> NED University of Engineering & Technology</p>
                <br/>
                <h4 className='edu-heading'>Intermediate</h4>
                <p className='edu-name'><span className='highlight'>Deg. Name:</span> Pre-engineering</p>
                <p className='edu-para'><span className='highlight'>Institute</span> B.A.M.M P.E.C.H.S Govt. College for Women</p>
                <p className='edu-para'><span className='highlight'>Grade:</span> A-One</p>
                <br/>
                <h4 className='edu-heading'>Matriculation</h4>
                <p className='edu-para'><span className='highlight'>Institute</span> Shamsi Society Model Girls School</p>
                <p className='edu-para'><span className='highlight'>Grade:</span> A-One</p>

            </div>
        </div>
    </div>
    </>
  )
}

export default About;