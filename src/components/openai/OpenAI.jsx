import React from 'react';
import './openai.css';
import { Features } from '../../containers';
const OpenAI = () => {
  return (
    <section id="OpenAI">
      <div className="gpt3__openai-container">
        <div className="gpt3__openai-container-header">
          <h1 className='gradient-text'> 
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
          </h1>
          <a href="#Library">Request Early Access to Get Started</a>
        </div>

        <div className="gpt3__openai-container-features">
          <Features heading="Improving end distrusts instantly" content="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."/>
          <Features heading="Become the tended active" content="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."/>
          <Features heading="Message or am nothing" content="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."/>
          <Features heading="Really boy law county" content="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."/>

        </div>
      </div>
    </section>
  )
}

export default OpenAI;