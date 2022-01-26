import React from 'react'
import FadeIn from '../animations/fadeIn'

function BasicComponent({ children, vars }) {
    return (
        <div className="section">
            <h3 className="title">Animation components</h3>
            <FadeIn vars={{ x: 100 }}>
                <p className="shape">fade in</p>
            </FadeIn>
        </div>
    );
}

export default BasicComponent