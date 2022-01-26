import React, { useRef, useLayoutEffect } from 'react'
import gsap from "gsap"

function FadeIn({ children, vars }) {
    const el = useRef();
    
    useLayoutEffect(() => {    
      gsap.from(el.current.children, { 
        opacity: 0,
        ...vars
      });        
    }, []);
    
    return <span ref={el}>{children}</span>;
}

export default FadeIn