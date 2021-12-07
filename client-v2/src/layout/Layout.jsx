import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <div style={{ position: 'fixed', bottom: '0' }}>
        <Footer />
      </div>
    </div>
  )
}
