import React, { useRef, useLayoutEffect } from 'react'
import gsap from "gsap"

function BasicTargeting() {
    const el = useRef();
    const tl = useRef();
    
    useLayoutEffect(() => {            
      const q = gsap.utils.selector(el);

      tl.current = gsap.timeline()
        .to(q(".shape-2"), {
          duration: 1,
          skewX: 5,
          x: 100,
          stagger:{
            amount: .2
          }
        })
        .fromTo(q(".shape-3"), 
          {
            x: -100,
            opacity: 0
          },
          {
            duration: .6,
            x: 0,
            delay: .1,
            opacity: 1
          }
        );
  
    }, []);
    
    return (
      <div ref={el} className="section">
        <h3 className="title">Basic timeline</h3>
        <p className="shape shape-2 mb-3">Home</p>
        <p className="shape shape-3 mb-3">Home</p>
      </div>
    );
}

export default BasicTargeting