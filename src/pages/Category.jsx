import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import CategoryPage from '../components/CategoryPage'

function Category (props) {
  console.log(props.match.params.categoryId)
  if (props.category) {
    return (
      <>
        <Helmet>
          <title>{`${props.category.title} | Get Flowers`}</title>
          <meta name='description' content={props.category.title} />
        </Helmet>

        <CategoryPage title={props.category.title} products={props.products} />
      </>
    )
  }

  return (
    <>
      <Helmet title="Loading category... | Get Flowers" />

      <p>Loading category...</p>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.data.products[ownProps.match.params.categoryId],
    category: state.data.categories.filter(category => {
      return category.id === ownProps.match.params.categoryId
    })
  }
}

export default connect(mapStateToProps, null)(Category)
