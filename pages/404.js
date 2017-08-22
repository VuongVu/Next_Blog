import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../hocs/Layout'

export default class extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>404</title>
        </Head>
        <Layout>
          <div>
            404 - Page Not Found
          </div>
        </Layout>
      </div>
    )
  }
}
