import React from 'react'
import { connect } from 'react-redux'
import LandingCategory from '../components/LandingCategory'

function LandingCategoryContainer (props) {
  return (
    <LandingCategory category={props.category[0]} products={props.products} screenWidth={props.screenWidth} />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    category: state.data.categories.filter(category => {
      return category.id === ownProps.id
    }),
    products: state.data.products[ownProps.id],
    screenWidth: state.data.screenWidth
  }
}
export default connect(
  mapStateToProps,
  null
)(LandingCategoryContainer)
