import React from 'react'
import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";


const Skills = () => {
  return (
    <div className="skills">
        <h1 className="skills_title">Skills</h1>
        <p className="skills_text">In the period of studing I have experienced and learned the followings</p>
        <div className="skills_box">
            <div className="card card_1"><TfiHtml5 /></div>
            <div className="card card_2"><FaCss3 /></div>
            <div className="card card_3"><IoLogoJavascript /></div>
            <div className="card card_4"><FaReact /></div>
            <div className="card card_5"><SiRedux /></div>
            <div className="card card_6"><SiReactquery /></div>
        </div>
    </div>
  )
}

export default Skills
