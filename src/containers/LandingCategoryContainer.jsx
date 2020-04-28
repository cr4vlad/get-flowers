import React from 'react'
import { connect } from 'react-redux'
import LandingCategory from '../components/LandingCategory'

function LandingCategoryContainer (props) {
  return (
    <LandingCategory category={props.category[0]} products={props.products} />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    category: state.data.categories.filter(category => {
      return category.id === ownProps.id
    }),
    products: state.data.products[ownProps.id]
  }
}
export default connect(
  mapStateToProps,
  null
)(LandingCategoryContainer)
