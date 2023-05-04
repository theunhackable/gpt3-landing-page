import React, { useState } from 'react';

import './navbar.css';
import './animations.css';
import openHamburger from '../../assets/imgs/open-hamburger.svg'
import closeHamburger from '../../assets/imgs/close-hamburger.svg'

const sections = [
    {
      name:'Home',
      id: "home",
      class: ''
    },
    {
      name: 'WGPT',
      id: 'WGPT',
      class: ''
    },
    {
      name:'OpenAI',
      id: 'OpenAI',
      class: ''
  
    },
    {
      name:'Blog',
      id: 'Blog',
      class: ''
    }, 
    { 
      name:'Contact Us',
      id: 'Footer',
      class: ''
    },
  ];

const Sections = () => {
  return (
        sections.map((section, ind) => {
          return <a className='gpt3__navbar-ham-links' href={'#' + section.id}><div id={ind} key={ind} className={section.class}>{section.name}</div></a>
        })
  )
}
const SignInSignUp = () => {
  return (
        <>
          <button id="SignIn" className="gpt__navbar-signin">
            Sign In
          </button>

          <button id="SignUp" className="gpt__navbar-signup">
            Sign Up
          </button>
        </>
  );
}

const NavBar = () => {
  const[ham, setHam] = useState(false);
  function handleClick(event){
    console.log("hello")
    setHam(
      (prevHam) => {
        return !prevHam
      }
    )
  }
  return (
    <>
      <nav className='gpt3__navbar'>
        <div className="gpt3__navbar-heading">
          <h1 className='gradient-text'>
            GPT3
          </h1>
        </div>
        <div className="gpt3__navbar-sections-wrapper">
          <Sections/>
        </div>
        <div className="gpt3__navbar-content-wrapper">
          <SignInSignUp/>
          <img height="47px" width="47px" onClick={handleClick} src={ham===true?closeHamburger:openHamburger} alt="hamburger" className="hamburger" />
        </div>
      </nav>
      {
        ham && (<div className="gpt3__navbar-ham">
        <div className="gpt3__navbar-ham-sections-wrapper">
            <Sections/>
        </div>
        <div className="gpt3__navbar-ham-content-wrapper">
          <SignInSignUp/>
        </div>
      </div>)
      }
      
    </>
  );
}

export default NavBar;