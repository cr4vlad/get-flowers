import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'

function FooterContainer (props) {
  if (!props.categories) {
    console.log('FooterContainer props.categories:', props.categories)

    return (
      <p>Loading footer...</p>
    )
  }

  return (
    <Footer categories={props.categories} />
  )
}

const mapStateToProps = state => {
  return {
    categories: state.data.categories
  }
}

export default connect(
  mapStateToProps,
  null
)(FooterContainer)
