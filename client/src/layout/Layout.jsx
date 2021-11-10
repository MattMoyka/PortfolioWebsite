import './layout.css'


export default function Layout(props) {
  return (
    <div >
      <nav className='nav-container'>
        <div className='nav-title'>Matt Moyka</div>
        <div className='nav-links'>
          <div id='nav-link-font'>Home</div>
          <div id='nav-link-font'>About</div>
          <div id='nav-link-font'>Projects</div>
        </div>
      </nav>
      {props.children}
    </div>
  )
}
