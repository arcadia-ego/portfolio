import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import './styles/blog.css'

export default ({ data }) => {
  return (
    <Layout>
      <div className="blogContainer">
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link className="styledGatsbyLink" to={node.fields.slug}>
              <h3 className="blogTitle">
                {node.frontmatter.title} <br />
                <span className="blogDate">{node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "article" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            type
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
