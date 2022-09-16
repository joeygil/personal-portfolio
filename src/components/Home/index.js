import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-j.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['o', 'e', 'y']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}> H</span>
          <span className={`${letterClass} _08`}>i</span>
          <br />
          <span className={`${letterClass} _09`}>I</span>
          <span className={`${letterClass} _10`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={11}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={14}
          />
        </h1>
        <h2>Frontend Developer / Javascript / React </h2>
        <Link to="contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home
