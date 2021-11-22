import './component.css'
import Landing from './Landing'

export default function AboutMe() {
  return (
    <div>
      <div id='who' className='blocker-top'></div>
      <div className='aboutme-container'>
        <div className='aboutme-text'>
          <div className='aboutme-title' >Who?</div>
          <p className='aboutme-p'> I am a junior developer with a degree in mechanical engineering. I am expanding my career into the software devlopement space where I will apply my advanced problem solving skills to create websites and softwares that will bring quality of life to the end users. <br /><br />
            Currently I have 3 years of experience in the mechanical engineering field and have built apps on the MERN and React on Rails stacks. If you or anyone you know would like to chat about web development you can find me on <a href='https://www.linkedin.com/in/matthew-moyka-952651111/' >LinkedIn</a>.
          </p>
        </div>
        <Landing />
      </div>
    </div>
  )
}
