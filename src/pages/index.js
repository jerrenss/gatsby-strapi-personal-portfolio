import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Jobs from '../components/Jobs'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import SEO from '../components/SEO'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    AOS.refresh()
  })

  return (
    <Layout>
      <SEO title="Home" description="This is our Home page" />
      <div data-aos="fade">
        <Hero />
      </div>
      <div data-aos="fade-left">
        <Services />
      </div>
      <div data-aos="fade-right">
        <Jobs />
      </div>
      <div data-aos="fade-left">
        <Projects projects={projects} title="featured projects" showLink />
      </div>
      <div data-aos="fade-right">
        <Blogs blogs={blogs} title="latest articles" showLink />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
