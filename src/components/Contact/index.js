import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Form from './Form'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact'.split('')}
              idx="15"
            />
          </h1>

          <p>
            I am currently interested in freelance opportunities, big or small,
            to build my portfolio. Feel free to get in touch below if you have
            enquiries or questions:
          </p>
        </div>
        <br />
        <Form />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
