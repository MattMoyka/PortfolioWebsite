import './layout.css'
import { NavHashLink } from 'react-router-hash-link'

export default function Layout(props) {
  return (
    <div >
      <nav className='nav-container'>
        <div className='nav-title'>Matt Moyka</div>
        <div className='nav-links'>
          <NavHashLink activeStyle={{ color: 'white' }} smooth to='/#who' id='nav-link-font'>Who Am I?</NavHashLink>
          <NavHashLink activeStyle={{ color: 'white' }} smooth to='/#projects' id='nav-link-font'>Projects</NavHashLink>
          <NavHashLink activeStyle={{ color: 'white' }} smooth to='/#skills' id='nav-link-font'>Skills</NavHashLink>
        </div>
      </nav>
      {props.children}
    </div>
  )
}
