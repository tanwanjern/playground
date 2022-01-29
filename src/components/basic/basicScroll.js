import React, { useRef, useEffect } from 'react'
import gsap from "gsap"

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
        <div ref={ref} className="section mt-3">
            <h3 className="title">Basic Scroll</h3>
            <div className="shape-container relative">
                <div className="shape shape-1 mb-3"></div>
            </div>
        </div>
    )
}

export default BasicScroll