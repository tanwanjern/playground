import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

// https://greensock.com/react
// https://greensock.com/react-advanced/

const IndexPage = () => {

  return(
    <Layout>
      <Seo title="Home" />
        <div className="container mx-auto">
          
          <div className="py-8">
            <h1 className="text-4xl font-bold mb-3">GSAP + React: Index</h1>
            <Link to='/basic' className="link block">Go to Basic Experiment</Link>
            <Link to='/scroll' className="link block">Go to Scroll Trigger Experiment</Link>
          </div>

        </div>
    </Layout>
  )
}

export default IndexPage
