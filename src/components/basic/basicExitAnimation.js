import React, { useRef, useState } from 'react'
import gsap from "gsap"

function BasicExitAnimation() {
    const boxRef = useRef();
    const [active, setActive] = useState(true);
  
    const remove = () => {
      gsap.to(boxRef.current, {
        opacity: 0,
        onComplete: () => setActive(false)
      });
    };
    
    return (
      <div className="section">
        <h3 className="title">Exit animations</h3>
          <button onClick={remove} className="btn mb-3">Remove</button>
          { active ? <div className="shape shape-1 mb-3" ref={boxRef}>Box</div> : null }
      </div>
    );
}

export default BasicExitAnimation