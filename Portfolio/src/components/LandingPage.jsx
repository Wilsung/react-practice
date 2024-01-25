import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'



class LandingPage extends Component {
  render() {
    return(
      <div className='landing-container'>
            <h2>I'm <span className='spc-font'>Wilson Ung</span>,</h2>
            <h2>Front-End Web Developer.</h2>
            <p className='intro-copy'>Based in Los Angeles, CA. View some of my work <NavLink to="/Projects"><span>here</span></NavLink>.</p>
      </div>
    )
  }
}

export default LandingPage;
