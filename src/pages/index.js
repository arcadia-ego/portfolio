import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import './styles/index.css'

const IndexPage = () => (
  <Layout>
    <div className="indexContainer">
      <h1>Hi, I'm Harrison!</h1>
      <h3>I'm a hobbyist programmer turned professional.</h3>
      <p>Now go build something great.</p>
    </div>
  </Layout>
)

export default IndexPage
