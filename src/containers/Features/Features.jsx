import React from 'react';
import './features.css';

function Features(props) {
  return (
    <div className="feature-container">
        <div className="feature-heading">
          <div className="feature-line"></div>
          <h1>{props.heading}</h1>
        </div>
        
        <div className="feature-contents">
          <p className="feature-content">{props.content}</p>
        </div>
    </div>
  )
}

export default Features