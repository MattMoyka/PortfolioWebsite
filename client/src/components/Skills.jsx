import './component.css'
import { Icon } from '@iconify/react';


export default function Skills() {
  return (
    <div className='icon-page'>
      <div className='skills-title'>Skills</div>
      <div className='icon-container'>
        <div id='logo-card'>
          <Icon icon="logos:html-5" width="100" height="100" />
        </div>
        <div id='logo-card'>
          <Icon id='icon' icon="logos:css-3" width="100" height="100" />
        </div>
        <div id='logo-card'>
          <Icon id='icon' icon="logos:react" width="100" height="100" />
        </div>
        <div id='logo-card'>
          <Icon id='icon' icon="logos:ruby" width="100" height="100" />
        </div>
        <div id='logo-card'>
          <Icon id='icon' icon="logos:rails" width="100" height="100" />
        </div>
        <div id='logo-card'>
          <Icon id='icon' icon="akar-icons:github-fill" width="100" height="100" />
        </div>
        <div id='logo-card'>
          <Icon id='icon' icon="logos:express" width="100" height="100" />
        </div>
        <div id='logo-card'>
          <Icon icon="logos:mongodb" width="100" height="100" />
        </div>
        <div id='logo-card'>
          <Icon id='icon' icon="logos:postgresql" width="100" height="100" />
        </div>
        <div id='logo-card'>
          <Icon id='icon' icon="logos:javascript" width="100" height="100" />
        </div>
      </div>
    </div>
  )
}
