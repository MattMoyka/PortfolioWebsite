import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import './screen.css'


export default function Home() {
  return (
    <div>
      <div className='space-one'></div>
      <AboutMe />
      <Projects />
      <Skills />

    </div>
  )
}
