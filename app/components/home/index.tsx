import React from 'react'
import Hero from './hero'
import Industries from './Industries'
import FeaturedERP from './PortfolioGrid'
import ProjectsShowcase from './ProjectsShowcase'
import DesignProcess from './DesignProcess'
import ExperienceTimeline from './ExperienceTimeline'
import AboutMe from './AboutMe'
import SkillsTools from './SkillsTools'
import Achievements from './Achievements'
import Contact from './Contact'
import Footer from '../layouts/Footer'
import PortfolioGrid from './PortfolioGrid'

const Landing = () => {
  return (
    <div>
        <Hero/>
        <Industries/>
        <PortfolioGrid/>
        <ProjectsShowcase/>
        <DesignProcess/>
        <ExperienceTimeline/>
        <AboutMe/>
        <SkillsTools/>
        <Achievements/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Landing