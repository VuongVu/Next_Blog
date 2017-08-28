import React, { Component } from 'react'
import Head from 'next/head'

import Layout from '../hocs/Layout'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Life stories</title>
        </Head>
        <Layout>
          <section className="hero is-medium is-primary is-bold">
            <div className="hero-body has-text-centered">
              <div className="container">
                <h1 className="title">
                  Welcome to the Life Stories
                </h1>
                <h2 className="subtitle">
                  Good stories give strength to ourselves and inspire good stories in others.
                </h2>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    )
  }
}
