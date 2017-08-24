import React, { Component } from 'react'
import Head from 'next/head'
import cookie from 'cookie'
import { withApollo, compose } from 'react-apollo'

import Layout from '../hocs/Layout'

import withData from '../lib/withData'
import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/check-logged-in'

class User extends Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context, apolloClient)

    if (!loggedInUser.user) {
      // If not signed in, send them somewhere more useful
      redirect(context, '/sign-in')
    }

    return { loggedInUser }
  }

  signout = () => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1 // Expire the cookie immediately
    })

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    this.props.client.resetStore().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, '/sign-in')
    })
  }
  
  render() {    
    return (
      <div>
        <Head>
          <title>{this.props.loggedInUser.user.username} - Life Stories</title>
        </Head>
        <Layout>
          <div>
            User Profile Page
          </div>
        </Layout>
      </div>
    )
  }
}

export default compose (
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo
)(User)