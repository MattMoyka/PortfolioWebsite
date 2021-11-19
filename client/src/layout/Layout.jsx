import './layout.css'
import { Icon } from '@iconify/react';
import websitelogo from '../assets/websitelogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header';


export default function Layout(props) {

  return (
    // <div >
    //   <div className='intro-page'>
    //     <div className='landing-block'>
    //       <div className='landing-title'>
    //         {toggle ? <Typewriter words={['Hello', 'My name is Matt', 'Welcome to my site, I hope you enjoy your visit']}
    //           onFinished={() => {
    //             setToggle(false)
    //           }}
    //         /> : <div>Click the button or scroll down to start exploring. </div>}
    //       </div>
    //       <NavHashLink smooth to='/#nav' ><button type="button" class="btn btn-dark landing-button">Explore</button></NavHashLink>

    //     </div>
    //   </div>
    //   <nav className='nav-container' >
    //     <img className='website-logo ' id='nav' src={websitelogo} alt='matt moyka software engineer' />
    //     <div className='nav-links' id={show ? 'nav-hide' : 'nav-show'}>
    //       <NavHashLink activeStyle={{ color: 'gray' }} smooth to='/#who' id='nav-link-font'>Who Am I?</NavHashLink>
    //       <NavHashLink activeStyle={{ color: 'gray' }} smooth to='/#projects' id='nav-link-font'>Projects</NavHashLink>
    //       <NavHashLink activeStyle={{ color: 'gray' }} smooth to='/#skills' id='nav-link-font'>Skills</NavHashLink>
    //     </div>
    //     <button onClick={() => setShow(prevState => !prevState)} className="navbar-toggler-icon">X</button>
    //   </nav>
    //   {props.children}
    //   <footer className='footer' >
    //     <div>Visit me below!</div>
    //     <div className='footer-container'>
    //       <a href='https://github.com/MattMoyka' target="_blank" rel="noreferrer"><Icon icon="jam:github" className='footer-icon' width="80" height="80" /></a>
    //       <a href='https://www.linkedin.com/in/matthew-moyka-952651111/' target="_blank" rel="noreferrer"><Icon icon="bi:linkedin" className='footer-icon' width="70" height="70" /></a>
    //     </div>
    //   </footer>
    // </div>
    <>

      <nav className="navbar nav-container navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="#who"><img className='logo' src={websitelogo} alt='mattmoykalogo' /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: 'black' }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#who">Who Am I? <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Header />
      {props.children}
      <footer className='footer' >
        <div>Visit me below!</div>
        <div className='footer-container'>
          <a href='https://github.com/MattMoyka' target="_blank" rel="noreferrer"><Icon icon="jam:github" className='footer-icon' width="80" height="80" /></a>
          <a href='https://www.linkedin.com/in/matthew-moyka-952651111/' target="_blank" rel="noreferrer"><Icon icon="bi:linkedin" className='footer-icon' width="70" height="70" /></a>
        </div>
      </footer>
    </>
  )
}
