import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default class App extends Component {
  render () {
    return (
      <Router>
        <Navbar />
        <BaseRouter />
        <Footer />
      </Router>
    )
  }
}
