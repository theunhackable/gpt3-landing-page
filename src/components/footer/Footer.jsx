import React from 'react';
import './footer.css';



const links = ['Overons', 'Social Media', 'Counters', 'Contact'];
const company =["Terms & Conditions", "Privacy Policy", "Contact"];

const LinksRenderer = () => {
  return(
    <ul>
      {links.map((link, ind) => {
        return <li key={ind}>{ link }</li>
      })}
    </ul>
  )
}
const CompanyRenderer = () => {
  return(
    <ul>
      {company.map((details, ind) => {
        return <li key={ind}>{ details }</li>
      })}
    </ul>
  )
}
const Footer = () => {
  return (
    <div id="Footer" className="gpt3__footer-wrapper">
      <div className="gpt3__footer-heading-container">
        <h1 className='gradient-text'>
          Do you want to step in to the future before others
        </h1>
        <button>
          Request Early Access
        </button>
      </div>
      <div className="gpt3__footer-contacts-wrapper">
        <div className="gpt3__footer-contacts-company-info">
          <h1 className='gradient-text'>
            GPT-3
          </h1>
          <p>
          Crechterwoord K12 182 DK Alknjkcb,<br/> All Rights Reserved
          </p>
        </div>

        <div className="gpt3__footer-contacts-links">
          <h3>Links</h3>
          {/* call links renderer */}
          <LinksRenderer/>
        </div>
        <div className="gpt3__footer-contacts-company">
          <h3>
            Company
          </h3>
          {/* call company renderer */}
          <CompanyRenderer/>
        </div>
        <div className="gpt3__footer-contacts-address">
          <h3>
            Get in touch
          </h3>
          <ul>
            <li>
              Crechterwoord K12 182 DK Alknjkcb
            </li>
            <li>
              085-132567
            </li>
            <li>
              info@payme.net
            </li>
          </ul>
        </div>
      </div>
      <div className='gpt3__footer-last-line'>
        <p>
          Developed By <a href='https://github.com/theunhackable'>Sri Ranga Sai</a>.
        </p>
       
        <p>
          <a href='https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3?node-id=0-1&t=Dp0ivngrKBA0uMRL-0'>Design link</a>.
        </p>
        <p>
          <a href='https://github.com/theunhackable/gpt3-landing-page'>GitHub link</a>.
        </p>
      </div>
    </div>
  )
}

export default Footer;