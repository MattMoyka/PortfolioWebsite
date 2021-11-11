import './component.css'
import Landing from './Landing'

export default function AboutMe() {
  return (
    <div>
      <div id='who' className='blocker-top'></div>
      <div className='aboutme-container'>
        <div className='aboutme-text'>
          <div className='aboutme-title' >Who?</div>
          <p className='aboutme-p'>Hi I'm Matt Moyka, a junior developer mixed with a degree and work experience in mechanical engineer. I am looking to break into the software devlopement role and apply his advanced problem solving skills and improve his software development knowledge.</p>
        </div>
        <Landing />
      </div>
    </div>
  )
}
