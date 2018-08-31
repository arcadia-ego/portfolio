import React from 'react'
import Layout from '../../components/layout'
import '../styles/project-post.css'
import img from '../assets/trivializer.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default ({ data }) => {
  const post = data.markdownRemark
  console.log("dirname", __dirname)
  return (
    <Layout>
      <div className="projectContainer">
        <div className="projectCard">
        <img src={img} alt="Trivializer" style={{width:"100%"}}></img>
          <h1>{post.frontmatter.title}</h1>
          <p>A trivia app designed to let you organize your questions. You can fetch questions based
            on their difficulty and category, or randomize them. 
          </p>
          <div> Created With: </div>
          {post.frontmatter.tech.map((item, index) => {
            console.log('ITEM MAPPED', item)
            return <div key={index}>{item}</div>
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        type
        tech
      }
    }
  }
`
