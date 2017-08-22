import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../hocs/BlankLayout'
import Input from '../components/Form/Input'

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Sign In - Life Stories</title>
        </Head>
        <Layout>
          <section className="hero is-fullheight is-light is-bold">
            <div className="hero-body">
              <div className="container">
                <div className="column is-vcentered">
                  <div className="column is-6 is-offset-3">
                    <h1 className="title has-text-centered">Sign in to Life Stories</h1>
                    <h2 className="subtitle has-text-centered">Come with us :)</h2>
                    <div className="box">
                      <Input
                        labelContent="Username or email address"
                        iconPosition="has-icons-left"
                        inputIcon="fa-user"
                        inputType="text"
                        helpContent="This is your username or email."
                      />
                      <Input
                        labelContent="Password"
                        iconPosition="has-icons-left"
                        inputIcon="fa-lock"
                        inputType="password"
                        helpContent="This is your password."
                      />
                      <hr />
                      <p className="control">
                        <button className="button is-success">Sign in</button>
                      </p>
                    </div>
                    <div className="box has-text-centered">
                      <p>New to Life Stories?</p>
                      <Link prefetch href="/sign-up">
                        <button className="button is-info">Create an account</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    )
  }
}
