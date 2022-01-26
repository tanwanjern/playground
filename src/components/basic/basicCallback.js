import React, { useRef, useState, useEffect, useCallback } from 'react'
import gsap from "gsap"

function BasicCallback() {

    const [tl, setTl] = useState(() => gsap.timeline());

    // pass a callback to child elements, this will add animations to the timeline
    const addAnimation = useCallback((animation, index) => {    
        tl.add(animation, index * 0.1);
    }, [tl]);
    
    return (
      <div className="section">
        <h3 className="title">Callback</h3>
        <Box addAnimation={addAnimation} index={0}>Box</Box>
        <Circle addAnimation={addAnimation} index={1} rotation="360">Circle</Circle>
      </div>
    );
}

function Box({ children, addAnimation, index }) {
    const el = useRef();

    useEffect(() => {   
      const animation = gsap.to(el.current, { x: -100 });
      addAnimation(animation, index);
      
      return () => animation.progress(0).kill();
    }, [addAnimation, index]);
    
    return <div className="shape" ref={el}>{children}</div>;
}
  
function Circle({ children, addAnimation, index, rotation }) {
    const el = useRef();

    useEffect(() => {  
      const animation = gsap.to(el.current, { rotate: rotation, x: 100 });
      addAnimation(animation, index);
      
      return () => animation.progress(0).kill();
    }, [addAnimation, index, rotation]);
    
    return <div className="shape" ref={el}>{children}</div>;
}

export default BasicCallback