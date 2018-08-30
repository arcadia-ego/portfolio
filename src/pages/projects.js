import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import './styles/index.css'

export default ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link className="styledGatsbyLink" to={node.fields.slug}>
              <h3 className="blogTitle">
                {node.frontmatter.title} <br /><span className="blogDate">{node.frontmatter.date}</span>
              </h3>
            </Link>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
query {
    allMarkdownRemark(filter: { frontmatter:  { type: { eq:"project"}}}) {
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
