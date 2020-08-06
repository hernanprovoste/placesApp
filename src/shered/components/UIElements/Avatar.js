import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    return (
        <div className={`avatar ${props.className}`} style={props.style}>
            <img 
                src={props.image}
                alt={props.alt}
                style={{witdh: props.witdh, height: props.witdh}}
            />
        </div>
    );
};


export default Avatar;