import React from 'react'
import AboutHero from './AboutHero'
import OurStory from './OurStory'
import InfoDisplay from './InfoDisplay'
import Experience from './Experience'
import OurTeam from './OurTeam'
import HeaderForRoute from '../shared/HeaderForRoute'
import Footer from '../Home/Footer'

const AboutUS = () => {
  return (
    <>
    <HeaderForRoute />
    <AboutHero />
    <OurStory/>
    <InfoDisplay/>
    <Experience />
    <OurTeam />
    <Footer></Footer>
    </>
  )
}

export default AboutUS
