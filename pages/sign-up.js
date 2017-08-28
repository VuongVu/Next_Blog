import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../hocs/BlankLayout'
import Input from '../components/Form/Input'

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Sign Up - Life stories</title>
        </Head>
        <Layout>
          <section className="hero is-fullheight is-light is-bold">
            <div className="hero-body">
              <div className="container">
                <div className="column is-vcentered">
                  <div className="column is-6 is-offset-3">
                    <h1 className="title has-text-centered">Join with us</h1>
                    <h2 className="subtitle has-text-centered">Create your personal account</h2>
                    <div className="box">
                      <Input
                        labelContent="Username"
                        iconPosition="has-icons-left"
                        inputIcon="fa-user"
                        inputType="text"
                        helpContent="This will be your username — you can enter your organization’s username next."
                      />
                      <Input
                        labelContent="Email Address"
                        iconPosition="has-icons-left"
                        inputIcon="fa-envelope"
                        inputType="email"
                        helpContent="Enter your email. We promise not to share your email with anyone."
                      />
                      <Input
                        labelContent="Password"
                        iconPosition="has-icons-left"
                        inputIcon="fa-lock"
                        inputType="password"
                        helpContent="This will be your password."
                      />
                      <Input
                        labelContent="Confirm Password"
                        iconPosition="has-icons-left"
                        inputIcon="fa-lock"
                        inputType="password"
                        helpContent="This will be your confirm password"
                      />
                      <hr />
                      <p className="help">By clicking on "Create an account" below, you are agreeing to join Life Stories :)</p>
                      <hr />
                      <p className="control">
                        <button className="button is-success">Create an account</button>
                      </p>
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
