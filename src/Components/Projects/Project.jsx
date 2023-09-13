import React from 'react';
import "./Project.css";

const Project = () => {
    return (
        <>
            <div className='projects'>
                <h1 className='projects-heading'>My Projects</h1>
                <div className='cards'>
                    <div class="card mx-4">
                        <div class="card-body">
                            <h5 class="card-title">Hire Loop</h5>
                            <p class="card-text">A website that helps hiring managers and jobseekers to hire and find job without wasting time on traditional way of hiring.</p>
                            <a href="https://github.com/muniba-rahman/Hire-Loop" target='_new' class="btn">Visit Github</a>
                        </div>
                    </div>
                    <div class="card mx-4">
                        <div class="card-body">
                            <h5 class="card-title">Movie App</h5>
                            <p class="card-text">A react based Movie app with popular series</p>
                            <a href="https://github.com/muniba-rahman/Netflix-App" target='_new' class="btn">Visit Github</a>
                            <a href="https://netflix-app-series.netlify.app/" class="btn" target='_new'>Live Demo</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Weather App Design</h5>
                            <p class="card-text">An static and responsive weather app</p>
                            <a href="https://github.com/muniba-rahman/weather-app" class="btn" target='_new'>Visit Github</a>
                            <a href="https://weather-app-dynamic.netlify.app/" class="btn" target='_new'>Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;
