import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout(props) {
  return (
    <div style={{ height: '100vh' }}>
      <Navbar />
      {props.children}

      <Footer />

    </div>
  )
}
