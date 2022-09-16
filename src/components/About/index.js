import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Home/Logo'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'about me'.split('')}
            idx={15}
          />
        </h1>
        <p>
          Efficient Junior Web Developer with excellent communication and
          organisational abilities brings enthusiasm and detailed understanding
          of various programming/mark-up languages.
        </p>
        <p>
          Resourceful approach to solving diverse problems. Deadline-driven and
          knowledgeable professional with strong desire to learn and contribute
          to team success.
        </p>
        <p>
          Successful at improving usability, performance and functionality by
          applying skills in HTML, JavaScript/React, and CSS/Sass. Collaborative
          and hardworking team player with critical thinking skills and
          systematic approach.
        </p>
      </div>

      <Logo />
      
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About
