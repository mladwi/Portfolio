import React from 'react'
import { Link, Element } from 'react-scroll';
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import './style/style.scss';


const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Element name='skills' className="skills-section">
      <Skills />
      </Element>
      <Element name='projects' className="projects-section">
      <Projects />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
