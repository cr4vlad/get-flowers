import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'
import NavbarContainer from './containers/NavbarContainer'
import FooterContainer from './containers/FooterContainer'
import ScrollToTop from './ScrollToTop'

export default class App extends Component {
  render () {
    return (
      <Router>
        <ScrollToTop />
        <NavbarContainer />
        <BaseRouter />
        <FooterContainer />
      </Router>
    )
  }
}
