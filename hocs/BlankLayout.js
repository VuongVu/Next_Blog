import Meta from '../components/Meta'

import stylesheet from 'styles/style.scss'

export default ({ children }) => (
  <div>
    <Meta />
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

    <div>
      { children }
    </div>
  </div>
)
