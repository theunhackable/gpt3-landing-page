import React from 'react';
import './features.css';

import features from '../../assets/imgs/Feature Image.svg'

const Features = () => {
  return (
    <section id="Library">
      <div className="gpt3__content-wrapper">
        <div className="gpt3__library-img-wrapper">
          <img src={features} alt="features" />
        </div>

        <div className="gpt3__library-heading-wrapper">
          <a href="">Request Early Access to Get Started</a>
          <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
          <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Features