import React from 'react';
import './home.css';

import AIHead from '../../assets/imgs/head-img-home.png';
import profiles from '../../assets/imgs/home-header-prople-proup.png';
import companies from '../../assets/imgs/Comapnies Logo.svg';
const Home = () => {
  return (
    <section id="Home">
      
      <div className='gpt3__home-container'>
        <div className='gpt3__home-header'>
          <h1 className='gradient-text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <div className="gpt3__home-input-container">
            <input placeholder='Your Email Address' type="email" /><button>Get Started</button>
          </div>
          <div className="gpt3__home-people-container">
            <img src={profiles} alt="profiles" className="gtp3__home-header-profiles-img" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>

        <div className="gpt3__home-img">
          <img src={AIHead} alt="ai-head" />
        </div>
      </div>

      <div className="gpt3__home-companies">
        <img src={companies} alt="" />
      </div>

    </section>
  )
}

export default Home;