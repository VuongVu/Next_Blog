import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../hocs/Layout'

export default class NewStory extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>New Story - Life Stories</title>
        </Head>
        <Layout>
          <div>
            New Story Page
          </div>
        </Layout>
      </div>
    )
  }
}
