import React, { useRef, useEffect, useState} from 'react'
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import gsap from "gsap"

// https://greensock.com/react
// https://greensock.com/react-advanced/

const IndexPage = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {            
    
    tl.current = gsap.timeline()
      .to(q(".box"), {
        duration: 1,
        skewY: 5,
        y: 400,
        stagger:{
          amount: .2
        }
      })
      .fromTo(q(".circle"), 
        {
          duration: .6,
          x: -100,
          delay: .2,
          opacity: 0
        },
        {
          duration: .6,
          x: 0,
          delay: .2,
          opacity: 1
        }
      );

  }, []);

  return(
    <Layout>
      <Seo title="Home" />
        <div className="container mx-auto" ref={el}>
          <button>click</button>
          <p className="circle">Home</p>
          <p className="box">Home</p>
        </div>
    </Layout>
  )
}

export default IndexPage
