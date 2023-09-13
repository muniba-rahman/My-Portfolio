import React from 'react';
import "./Head.css";
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"#1d3461"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style={{color: "#eff1f3"}}>Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color: "#C5DFF8", backgroundColor: "#C5DFF8"}}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link" href="/home" style={{color: "#C5DFF8"}}>Home</a> */}
          <Link class="nav-link" to="/" style={{color: "#C5DFF8"}}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about" style={{color: "#C5DFF8"}}>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/projects" style={{color: "#C5DFF8"}}>Projects</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact" style={{color: "#C5DFF8"}}>Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link profile" to="https://github.com/muniba-rahman" style={{color: "#C5DFF8"}} target='_git'><i class="fa-brands fa-github"></i></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link profile" to="https://www.linkedin.com/in/muniba-rahman-085701230/" style={{color: "#C5DFF8"}} target='_in'><i class="fa-brands fa-linkedin-in"></i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Head;