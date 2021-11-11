import './component.css'
import golf from '../assets/golf.png'
import docks from '../assets/docks.png'
import salesverse from '../assets/salesverse.png'

export default function Projects() {
  return (
    <div>
      <div id='projects' className='blocker'></div>
      <div className='project-container'>
        <h3 className='projects-title'>My Projects</h3>
        <div className='project-card'>
          <a href='https://18bogeys.netlify.app/' target="_blank" rel="noreferrer"><img src={golf} className='project-img' alt='18 bogeys app' /></a>
          <div className='project-div'>
            18 Bogeys is a golf game tracker. It records various information about your round and displays it among all the other games logged in the app.
          </div>
        </div>
        <div className='project-card'>

          <div className='project-div'>
            The Docks is a peer to peer rental platform. If you have every found yourself in need of something, but do not want to pay full price just to test it out? Well at the docks you can rent the gear from someone out first and test it out.
          </div>
          <a href='https://thedocks.netlify.app/' target="_blank" rel="noreferrer"><img src={docks} className='project-img' alt='The docks app' /></a>
        </div>
        <div className='project-card'>
          <a href='https://salesverse.netlify.app/' target="_blank" rel="noreferrer"><img src={salesverse} className='project-img' alt='salesverse app' /></a>
          <div className='project-div'>
            SalesVerse is the small business sales coordinator that will get your team on track and up to date. This program will hold all the info on the items you sell as well as displaying margin and other important info needed when deciding a price. In addition it will display over all stats based on revenue and percent growth. You can invite everyone on your team so that everyone can see how eachother are doing.
          </div>

        </div>
      </div>
    </ div>
  )
}
