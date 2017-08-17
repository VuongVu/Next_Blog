export default () => (
  <div className="container">
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item">
          <h1 className="title is-3">Life Stories</h1>
        </a>

        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Stories
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item">
                All Stories
              </a>
              <a className="navbar-item">
                Your Stories
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                Write Your Story
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button is-info is-outlined">
                  <span className="icon">
                    <i className="fa fa-sign-in"></i>
                  </span>
                  <span>Sign In</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span>Sign Up</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
)
