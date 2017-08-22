import Link from 'next/link'

export default () => (
  <div className="container">
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <h1 className="title is-3">Life Stories</h1>
          </a>
        </Link>

        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">
              Home
            </a>
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Stories
            </a>
            <div className="navbar-dropdown">
              <Link prefetch href="/stories">
                <a className="navbar-item">
                  All Stories
                </a>
              </Link>
              <Link prefetch href="/stories">
                <a className="navbar-item">
                  Your Stories
                </a>
              </Link>
              <hr className="navbar-divider" />
              <Link prefetch href="/new-story">
                <a className="navbar-item">
                  Write Your Story
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <Link prefetch href="/sign-in">
                  <a className="button is-info is-outlined">
                    <span className="icon">
                      <i className="fa fa-sign-in"></i>
                    </span>
                    <span>Sign In</span>
                  </a>
                </Link>
              </p>
              <p className="control">
                <Link prefetch href="/sign-up">
                  <a className="button is-primary is-outlined">
                    <span className="icon">
                      <i className="fa fa-user"></i>
                    </span>
                    <span>Sign Up</span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
)
