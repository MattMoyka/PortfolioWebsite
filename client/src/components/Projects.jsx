import './component.css'
import golf from '../assets/golf.png'
import docks from '../assets/docks.png'
import salesverse from '../assets/salesverse.png'
import Tilt from 'react-parallax-tilt'
import 'bootstrap'

export default function Projects() {
  return (
    <div>
      <div id='projects' className='blocker'></div>
      <div className='project-container'>
        <h3 className='projects-title'>My Projects</h3>
        <div className='project-card'>
          <Tilt><a href='https://18bogeys.netlify.app/' target="_blank" rel="noreferrer"><img src={golf} className='project-img' alt='18 bogeys app' /></a></Tilt>
          <div className='project-div'>
            18 Bogeys is a golf game tracker. It records various information about your round and displays it among all the other games logged in the app.
            <br />
            <br />
            <ul class="list-group list-group-flush">
              Tech Stack
              <li class="list-group-item">React</li>
              <li class="list-group-item">Tailwind</li>
              <li class="list-group-item">Airtable</li>
            </ul>
          </div>
        </div>
        <div className='project-card'>

          <div className='project-div'>
            The Docks is a peer to peer rental platform. Have you ever found yourself in need of something, but do not want to pay full price just to test it out? Well at the docks you can rent the gear from someone first and test it out at a much lower cost.
            <br />
            <br />
            <ul class="list-group list-group-flush">
              Tech Stack
              <li class="list-group-item">React</li>
              <li class="list-group-item">Express</li>
              <li class="list-group-item">MongoDB</li>
              <li class="list-group-item">Heroku</li>
              <li class="list-group-item">B-Crypt</li>
            </ul>
          </div>
          <Tilt><a href='https://thedocks.netlify.app/' target="_blank" rel="noreferrer"><img src={docks} className='project-img' alt='The docks app' /></a></Tilt>
        </div>
        <div className='project-card'>
          <Tilt><a href='https://salesverse.netlify.app/' target="_blank" rel="noreferrer"><img src={salesverse} className='project-img' alt='salesverse app' /></a></Tilt>
          <div className='project-div'>
            SalesVerse is the small business sales coordinator that will get your team on track and up to date. This program will hold all the info on the items you sell as well as displaying margin and other important info needed when deciding a price. In addition it will display over all stats based on revenue and percent growth.
            <br />
            <br />
            <ul class="list-group list-group-flush">
              Tech Stack
              <li class="list-group-item">React</li>
              <li class="list-group-item">Rails</li>
              <li class="list-group-item">Heroku</li>
              <li class="list-group-item">B-Crypt</li>
            </ul>
          </div>
        </div>
      </div>
    </ div>
  )
}
