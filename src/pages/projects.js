import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import './styles/index.css'
import Trivializer from './assets/trivializer.png'
import spaWeather from './assets/spaWeather.png'

const imgLibrary = {
  Trivializer: Trivializer,
  spaWeather: spaWeather,
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
            <div key={node.id}>
              <div className="projectCard">
                <a href={node.frontmatter.linkout}>
                  <img
                    src={imgLibrary[img]}
                    alt="Trivializer"
                    style={{ width: '100%' }}
                  />
                </a>
                <h1>{node.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
                <div> Created With: </div>
                {node.frontmatter.tech.map((item, index) => {
                  console.log('ITEM MAPPED', item)
                  return <div key={index}>{item}</div>
                })}
              </div>
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
