import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../hocs/Layout'

export default class extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Life stories</title>
        </Head>
        <Layout>
          <h4>Hello World</h4>
        </Layout>
      </div>
    )
  }
}
