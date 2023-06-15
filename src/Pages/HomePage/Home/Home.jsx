import React from 'react'
import Banner from '../Banner/Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faBrain} from '@fortawesome/free-solid-svg-icons';
import Skills from '../Skills/Skills';
import LearningCentre from '../LearningCentre/LearningCentre';
import Testimonial from '../Testimonial/Testimonial';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Skills></Skills>
      <LearningCentre></LearningCentre>
      <Testimonial></Testimonial>

    </div>
  )
}

export default Home
