import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import SocialLinks from '../constants/socialLinks'
const query = graphql`
  {
    file(relativePath: { eq: "hero-profile.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1>Gerren Seow</h1>
            <h4>Aspiring Full-Stack Developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <article class="hero-img">
          <Image fluid={fluid} className="hero-photo" />
        </article>
      </div>
    </header>
  )
}

export default Hero
