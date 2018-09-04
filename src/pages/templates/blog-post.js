import React from 'react'
import Layout from '../../components/layout'
import "../styles/blog-post.css";

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="blogContainer">
        <h1 className="blogTitle">{post.frontmatter.title}</h1>
        <div className="blogContents" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`
