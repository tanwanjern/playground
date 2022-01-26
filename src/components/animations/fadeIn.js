import React, { useRef, useLayoutEffect, forwardRef, useEffect } from 'react'
import gsap from "gsap"

const FadeIn = forwardRef(({ children, stagger = 0, x = 0 }, ref) => {
  const el = useRef();
  const animation = useRef();
  
  useLayoutEffect(() => {    
    animation.current = gsap.from(el.current.children, { 
      opacity: 0,
      stagger, 
      x 
    });        
  }, []);
  
  useEffect(() => {
    
    // forward the animation instance
    if (typeof ref === "function") {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);
  
  return <span ref={el}>{children}</span>
});

export default FadeIn