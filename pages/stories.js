import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../hocs/Layout'

export default class Stories extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Stories - Life Stories</title>
        </Head>
        <Layout>
          <div>
            Stories Page
          </div>
        </Layout>
      </div>
    )
  }
}
