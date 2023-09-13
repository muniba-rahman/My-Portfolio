import React from 'react';
import Head from './Components/Navbar/Head';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <>
    <div className='app'>
      <Head/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      {/* <Footer/> */}
    </div>
    </>
  )
}

export default App;