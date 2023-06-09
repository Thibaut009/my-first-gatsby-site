import React from "react"
import { FaGlobe, FaHtml5, FaCss3Alt, FaPhp, FaJava, FaPython, FaReact, FaAngular, FaDatabase, FaTools } from "react-icons/fa"
import { SiJavascript, SiTypescript, SiSymfony, SiFlutter } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { section, wave, title, skills, set, icon, skill_icon, subtitle, list } from '../skills/skills.module.css'

const Skills = () => {
  return (
    <section className={section}>
      <svg className={wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fillOpacity="1" d="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>

      <h2 className={title}>My Skills</h2>
      <div className={skills}>
        <div className={set}>
          <span className={icon}><FaGlobe /></span>
          <h2 className={subtitle}>Frontend</h2>
          <div className={list}>
            <p>Html</p>
            <i className={skill_icon}><FaHtml5 /></i>
          </div>
          <div className={list}>
            <p>Css</p>
            <i className={skill_icon}><FaCss3Alt /></i>
          </div>
          <div className={list}>
            <p>JavaScript</p>
            <i className={skill_icon}><SiJavascript /></i>
          </div>
          <div className={list}>
            <p>TypScript</p>
            <i className={skill_icon}><SiTypescript /></i>
          </div>
        </div>


        <div className={set}>
          <span className={icon}><FaDatabase /></span>
          <h2 className={subtitle}>Backend</h2>
          <div className={list}>
            <p>PHP</p>
            <i className={skill_icon}><FaPhp /></i>
          </div>
          <div className={list}>
            <p>Java</p>
            <i className={skill_icon}><FaJava /></i>
          </div>
          <div className={list}>
            <p>Python</p>
            <i className={skill_icon}><FaPython /></i>
          </div>
          <div className={list}>
            <p>Go</p>
            <i className={skill_icon}><TbBrandGolang /></i>
          </div>
        </div>


        <div className={set}>
          <span className={icon}><FaTools /></span>
          <h2 className={subtitle}>Framework</h2>
          <div className={list}>
            <p>React</p>
            <i className={skill_icon}><FaReact /></i>
          </div>
          <div className={list}>
            <p>Angular</p>
            <i className={skill_icon}><FaAngular /></i>
          </div>
          <div className={list}>
            <p>Symfony</p>
            <i className={skill_icon}><SiSymfony /></i>
          </div>
          <div className={list}>
            <p>Flutter</p>
            <i className={skill_icon}><SiFlutter /></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
