import React from 'react'
import { connect } from 'react-redux'
import LandingPage from '../components/LandingPage'

function Landing (props) {
  if (!props.categories) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <LandingPage categories={props.categories} />
  )
}

const mapStateToProps = state => {
  return {
    categories: state.data.categories
  }
}

export default connect(mapStateToProps, null)(Landing)
