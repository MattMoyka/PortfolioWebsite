import './layout.css'
import { NavHashLink } from 'react-router-hash-link'
import { Icon } from '@iconify/react';
import personallogo from '../assets/personallogo.png'

export default function Layout(props) {
  return (
    <div >
      <nav className='nav-container'>
        <img className='personal-logo' src={personallogo} alt='matt moyka software engineer' />
        <div className='nav-links'>
          <NavHashLink activeStyle={{ color: 'white' }} smooth to='/#who' id='nav-link-font'>Who Am I?</NavHashLink>
          <NavHashLink activeStyle={{ color: 'white' }} smooth to='/#projects' id='nav-link-font'>Projects</NavHashLink>
          <NavHashLink activeStyle={{ color: 'white' }} smooth to='/#skills' id='nav-link-font'>Skills</NavHashLink>
        </div>
      </nav>
      {props.children}
      <footer className='footer' >
        <div>Visit me below!</div>
        <div className='footer-container'>
          <a href='https://github.com/MattMoyka' target="_blank" rel="noreferrer"><Icon icon="jam:github" className='footer-icon' width="80" height="80" /></a>
          <a href='https://www.linkedin.com/in/matthew-moyka-952651111/' target="_blank" rel="noreferrer"><Icon icon="bi:linkedin" className='footer-icon' width="80" height="80" /></a>
        </div>
      </footer>
    </div>
  )
}
