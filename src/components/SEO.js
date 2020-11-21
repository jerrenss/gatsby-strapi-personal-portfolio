import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const defaultImageUrl =
    'https://jerrens-personal.s3-ap-southeast-1.amazonaws.com/portfolio-site-image.png'
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
    author,
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
      <meta name="image" property="og:image" content={image} />
      <meta name="author" content={author} />
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:description" content={description || siteDesc} />
      <meta property="og:url" content={siteUrl} />
      {/* twitter cards */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} /> */}
    </Helmet>
  )
}
export default SEO
