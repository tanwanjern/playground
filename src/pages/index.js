import React from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"

import BasicTargeting from '../components/basic/basicTargeting'
import BasicExitAnimation from '../components/basic/basicExitAnimation'
import BasicComponent from '../components/basic/basicComponent'

// https://greensock.com/react
// https://greensock.com/react-advanced/

const IndexPage = () => {

  return(
    <Layout>
      <Seo title="Home" />
        <div className="container mx-auto">
          
          <h1 className="text-4xl font-bold py-8">GSAP + React: Basic Experiment</h1>
          
          <BasicTargeting/>
          <BasicComponent/>
          <BasicExitAnimation/>

        </div>
    </Layout>
  )
}

export default IndexPage
