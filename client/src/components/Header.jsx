import './component.css'
import Typed from 'react-typed'
import Particles from "react-tsparticles";


export default function Header() {
  const particlesInit = (main) => {

  };

  const particlesLoaded = (container) => {

  };
  return (
    <div className='intro-page'>
      <div className='landing-block'>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{

            fpsLimit: 60,
            interactivity: {
              events: {

                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#000000",
              },
              links: {
                color: "#000000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "out",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 1000,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
            onDiv: [
              {
                enable: true,
                selectors: ".bounce.rectangle",
                mode: "bounce",
                type: "rectangle"
              }
            ],
          }} />

        <div className='landing-title'>
          <div>Hi I'm Matt, A Software Engineer</div>
          <div style={{ width: '50vw' }}> Scroll down for:
            <Typed
              className='typed-text bounce rectangle'
              strings={['&nbsp;a little bit about me', '&nbsp;my projects', '&nbsp;my skills']}
              typeSpeed={40}
              backSpeed={60}
              loop
            /></div>
        </div>
      </div>
    </div>
  )
}
