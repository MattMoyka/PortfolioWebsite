import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Landing from "../components/Landing"
import './screen.css'


export default function Home() {
  return (
    <div>
      <div className='space-one'></div>
      <Landing />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  )
}
