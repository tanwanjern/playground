import React from 'react'

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

export default SplitText