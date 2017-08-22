import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import stylesheet from 'styles/style.scss'

export default ({ children }) => (
  <div>
    <Meta />
    <Navbar />
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

    <div>
      { children }
    </div>

    <Footer />

    <script src="../static/js/navbarToggle.js"></script>
  </div>
)
