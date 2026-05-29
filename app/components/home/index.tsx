import React from 'react'
import Hero from './hero'
import Industries from './Industries'
import FeaturedERP from './FeaturedERP'
import ProjectsShowcase from './ProjectsShowcase'
import DesignProcess from './DesignProcess'
import ExperienceTimeline from './ExperienceTimeline'
import AboutMe from './AboutMe'
import SkillsTools from './SkillsTools'

const Landing = () => {
  return (
    <div>
        <Hero/>
        <Industries/>
        <FeaturedERP/>
        <ProjectsShowcase/>
        <DesignProcess/>
        <ExperienceTimeline/>
        <AboutMe/>
        <SkillsTools/>
    </div>
  )
}

export default Landing