import React from 'react'
import VueCinema from "../assets/images/VueCinema.png";
import Nike from "../assets/images/Nike.png";
import GoTrip from "../assets/images/GoTrip.png";

const Projects = () => {
  return (
    <div>
      <div className="project">
        <h1 className="project_title">Projects</h1>
        <p className="project_text">Here are some of the projects I have worked on</p>
        <div className="projects_list">
        <a href="https://mladwi.github.io/VueCinema/"><img className='projects_img' src={VueCinema} alt="" width={400} />
        <h2 className="projects_name">VueCinema</h2></a>
        <a href="https://mladwi.github.io/Nike/"><img className='projects_img' src={Nike} alt="" width={400} />
        <h2 className="projects_name">Nike</h2></a>
        <a href="https://mladwi.github.io/GoTrip/"><img className='projects_img' src={GoTrip} alt="" width={400} />
        <h2 className="projects_name">GoTrip</h2></a>
        </div>
      </div>
    </div>
  )
}

export default Projects
