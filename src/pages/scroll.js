import React, { useRef, useEffect } from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

// https://greensock.com/blog/learning/using-scrolltrigger-in-react-r173/
// https://greensock.com/docs/v3/Eases

const Scroll = () => {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const ref2 = useRef(null);

    useEffect(() => {

        Splitting({ by: 'chars' });
        
        const tl = gsap.timeline({paused: true})
        
        tl.from(".text-animation .text span", {
            duration: 0.5, opacity: 0, stagger: 0.05, y: 30, ease: "power1.inOut",
            scrollTrigger: {
                trigger: ref.current.querySelector(".text-animation"),
                start: "top top", 
                end: "+=500",
                markers: true,
                toggleActions: "play pause resume reset",
                scrub: true
            }
        });

        tl.from(".text-animation-2 .text .char", {
            duration: 0.5, opacity: 0, stagger: 0.05, y: 30, ease: "expo",
            scrollTrigger: {
                trigger: ref2.current.querySelector(".text-animation-2"),
                start: "center center", 
                end: "+=300",
                // markers: true,
                toggleActions: "play pause resume reset",
                scrub: true
            }
        });

    }, []);

    return(
        <Layout>
            <Seo title="Home" />
            <div className="container mx-auto">
                
                <div className="py-8">
                    <h1 className="text-4xl font-bold mb-3">GSAP + React: Scroll Trigger</h1>
                    <Link to='/' className="link">Go to Home</Link>
                </div>
                
                <div className="text-animation h-screen bg-gray-100 box" ref={ref}>
                    <h1 className="text-2xl font-bold">
                        <SplitText containerClass="text block">
                            Custom Split Text Component
                        </SplitText>
                    </h1>
                </div>
                
                <div className="text-animation-2 bg-gray-200 box" ref={ref2}>
                    <div className="text">
                        <h1 className="text-4xl font-bold" data-splitting>Splitting JS Text</h1>
                        <h1 className="" data-splitting>Some description</h1>
                    </div>
                </div>

                <BasicScroll/>

                <div style={{ height: 500 }}/>

            </div>
        </Layout>
    )
}

const SplitText = ({ children, containerClass }) => {

    return(
        <span aria-label={children} className={containerClass}>
            {
                children.split("").map((char, index)=>(
                    <span
                        className={ char === ' ' ? '' : 'inline-block' }
                        aria-hidden="true"
                        key={index}>
                        { char }
                    </span>
                ))
            }
        </span>
    );
};

const BasicScroll = () => {

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        gsap.fromTo(element.querySelector(".shape-1"),
            { opacity: 0, y: -20 },
            { 
                opacity: 1, y: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".shape-container"),
                    start: "bottom bottom",
                    end: "+=100",
                    // markers: true,
                    toggleActions: "play reverse play reverse",
                    scrub: true
                }
            }
        );

    }, []);

    return(
        <div ref={ref}>
            <div className="shape-container py-8 relative">
                <div className="shape shape-1 mb-3"></div>
            </div>
        </div>
    )
}

export default Scroll
