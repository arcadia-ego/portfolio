import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import './styles/index.css'
import Trivializer from './assets/trivializer.png'
import spaWeather from './assets/spaWeather.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const imgLibrary = {
  Trivializer: Trivializer,
  'spa Weather': spaWeather,
}

export default ({ data }) => {
  const post = data.allMarkdownRemark.edges
  console.log('POST', post)
  return (
    <Layout>
      <div className="projectContainer">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          let img = node.frontmatter.title
          return (
            <div className="projectCard" key={node.id}>
              <a href={node.frontmatter.linkout}>
                <img
                  src={imgLibrary[img]}
                  alt="Trivializer"
                  style={{ width: '100%', height: '200px' }}
                />
              </a>
              <a href={node.frontmatter.source}>
                <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
              </a>
              <h1 style={{ alignSelf: 'center' }}>{node.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
              <div style={{ fontWeight: 'bold' }}> Key Tech: </div>
              {node.frontmatter.tech.map((item, index) => {
                console.log('ITEM MAPPED', item)
                return <div key={index}>{item}</div>
              })}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            type
            tech
            linkout
            source
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
