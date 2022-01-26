import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import BasicTargeting from '../components/basic/basicTargeting'
import BasicExitAnimation from '../components/basic/basicExitAnimation'
import BasicComponent from '../components/basic/basicComponent'
import BasicCallback from '../components/basic/basicCallback'

const IndexPage = () => {

  return(
    <Layout>
      <Seo title="Basic" />
        <div className="container mx-auto">
          
          <div className="py-8">
            <h1 className="text-4xl font-bold mb-3">GSAP + React: Basic Experiment</h1>
            <Link to='/' className="link">Go to Home</Link>
          </div>
          
          <BasicTargeting/>
          <BasicComponent/>
          <BasicExitAnimation/>
          <BasicCallback/>

        </div>
    </Layout>
  )
}

export default IndexPage
