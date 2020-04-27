import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'
import NavbarContainer from './containers/NavbarContainer'
import Footer from './components/Footer'

export default class App extends Component {
  render () {
    return (
      <Router>
        <NavbarContainer />
        <BaseRouter />
        <Footer />
      </Router>
    )
  }
}
