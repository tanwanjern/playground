import React, { useRef } from 'react'
import FadeIn from '../animations/fadeIn'

function BasicComponent() {

    const animation = useRef();
     
    const toggle = () => {
        animation.current.reversed(!animation.current.reversed());
    };

    return (
        <div className="section">
            <h3 className="title">Animation components</h3>
            <button onClick={toggle} className="btn mb-3">Toggle</button>
            <FadeIn stagger={0.1} x={100} ref={animation}>
                <p className="shape">fade in</p>
            </FadeIn>
        </div>
    );
}

export default BasicComponent