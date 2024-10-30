import React from 'react'
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import reactquery from "../assets/images/reactquery.png";

const Skills = () => {
  return (
    <div className="container">
      <div className="skills">
        <h1 className="skills_title">Skills</h1>
        <p className="skills_text">In the period of studing I have experienced and learned the followings</p>
        <div className="skills_box">
            <div className="card card_1"><img className='card_img' src={html} alt="" /></div>
            <div className="card card_2"><img className='card_img' src={css} alt="" /></div>
            <div className="card card_3"><img className='card_img' src={js} alt="" width={'225'} height={'225'} /></div>
            <div className="card card_4"><img className='card_img' src={react} alt="" width={'225'} height={'225'} /></div>
            <div className="card card_5"><img className='card_img' src={redux} alt="" width={'225'} height={'225'} /></div>
            <div className="card card_6"><img className='card_img' src={reactquery} alt="" width={'225'} height={'225'} /></div>
        </div>
      </div>
    </div>
  )
}

export default Skills
