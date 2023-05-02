import React from 'react';
import { Features } from '../../containers';
import './wgpt.css';

const WGPT = () => {
  return (
    <section id="WGPT">
      <div className="gpt3__wgpt-container">
        <div className="gpt3__wgpt-content1">
            <Features heading="What is GPT-3?" content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
        </div>
        
        <div className="gpt3__wgpt-heading">
          <h1 className='gradient-text'>
            The possibilities are beyond your imagination
          </h1>
          <a href="#Library">Explore The Library</a>
        </div>

        <div className="gpt3__wgpt-features-container">
          <Features heading="Chatbots" content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
          <Features heading="Knowledgebase" content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."/>
          <Features heading="Education" content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."/>
        </div>
      </div>
    </section>
  )
}

export default WGPT