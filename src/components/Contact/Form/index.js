import { useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'

const Form = () => {

const refForm = useRef()

const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_os1cn9j',
        'template_30u550z',
        refForm.current,
        'YaMvz_4KxHci7tU2N'
      )
      .then(
        () => {
          alert('Message Sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send, please try again!')
        }
      )
}

    return (
      <div className="contact-form">
        <form ref={refForm} onSubmit={sendEmail}>
          <ul>
            <li>
              <input type="text" name="from_name" placeholder="name" required />
            </li>
            <li className="half">
              <input type="email" name="from_email" placeholder="email" required />
            </li>
            <li>
              <input
                placeholder="subject"
                type="text"
                name="subject"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" className="flat-button" value="SEND" />
            </li>
          </ul>
        </form>
      </div>
    )
}

export default Form