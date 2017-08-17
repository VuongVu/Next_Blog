import Meta from './Meta'
import Navbar from './Navbar'
import Footer from './Footer'

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
