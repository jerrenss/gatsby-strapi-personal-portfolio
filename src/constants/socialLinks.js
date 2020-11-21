import React from 'react'
import {
  FaInstagramSquare,
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from 'react-icons/fa'

const data = [
  {
    id: 1,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: 'https://www.instagram.com/jerrens_',
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: 'https://www.linkedin.com/in/gerrenseow/',
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: 'https://github.com/jerrenss/',
  },
  {
    id: 4,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: 'https://www.facebook.com/gerren.seow',
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ''}`}>{links}</ul>
  )
}
