import React, { useRef, useEffect } from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// https://greensock.com/blog/learning/using-scrolltrigger-in-react-r173/

const Scroll = () => {

    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
          element.querySelector(".shape-1"),
          {
            opacity: 0,
            y: -20
          },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: element.querySelector(".shape-container"),
              start: "top top",
              end: "bottom center",
              markers: true,
            //   scrub: true
            }
          }
        );
    }, []);

    return(
        <Layout>
            <Seo title="Home" />
            <div className="container mx-auto">
                
                <div className="py-8">
                <h1 className="text-4xl font-bold mb-3">GSAP + React: Scroll Trigger</h1>
                <Link to='/' className="link">Go to Home</Link>
                </div>

                <div ref={ref}>
                    <div className="shape-container py-8">
                        <div className="shape shape-1 mb-3"></div>
                        <div className="shape shape-2 mb-3"></div>
                        <div className="shape shape-3 mb-3"></div>
                    </div>
                </div>

                <div style={{ height: 1000 }}/>

            </div>
        </Layout>
    )
}

export default Scroll
