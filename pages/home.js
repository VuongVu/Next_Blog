import React, { Component } from 'react'
import Head from 'next/head'
import Page from '../components/Page'

export default class extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Life stories</title>
        </Head>
        <Page>
          <h4>Hello World</h4>
        </Page>
      </div>
    )
  }
}
