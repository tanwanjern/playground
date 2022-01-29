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
          </div>

          <div className="section">
            <h3 className="text-lg font-bold">Experiment</h3>
            <Link to='/basic' className="link block">Go to Basic Experiment</Link>
            <Link to='/scroll' className="link block">Go to Scroll Trigger Experiment</Link>
            <Link to='#' className="link block invalid">Go to SVG Experiment [PENDING]</Link>
            <Link to='#' className="link block invalid">Go to Page Transition Experiment [PENDING]</Link>
          </div>
            
          <div className="section">
            <h3 className="text-lg font-bold">Showcase</h3>
            <Link to='/showcase/1-stories-google' className="link block">Go to Showcase 1: Stories Google [In progress]</Link>
          </div>

        </div>
    </Layout>
  )
}

export default IndexPage
