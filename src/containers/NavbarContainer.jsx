import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

function NavbarContainer (props) {
  if (!props.categories) {
    console.log('NavbarContainer props.categories:', props.categories)

    return (
      <p>Loading categories...</p>
    )
  }

  return (
    <Navbar categories={props.categories} />
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
)(NavbarContainer)