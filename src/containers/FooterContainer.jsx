import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'

function FooterContainer (props) {
  if (!props.categories || !props.screenWidth) {
    console.log('FooterContainer props.categories:', props.categories)
    console.log('FooterContainer props.screenWidth:', props.screenWidth)

    return (
      <p>Loading footer...</p>
    )
  }

  return (
    <Footer categories={props.categories} screenWidth={props.screenWidth} />
  )
}

const mapStateToProps = state => {
  return {
    categories: state.data.categories,
    screenWidth: state.data.screenWidth
  }
}

export default connect(
  mapStateToProps,
  null
)(FooterContainer)
