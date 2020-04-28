import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import CategoryPage from '../components/CategoryPage'

function Category (props) {
  if (props.category[0] && props.category[0].title && props.products) {
    const title = props.category[0].title

    return (
      <>
        <Helmet>
          <title>{`${title} | Get Flowers`}</title>
          <meta name='description' content={title} />
        </Helmet>

        <CategoryPage title={title} products={props.products} />
      </>
    )
  }

  console.log('props.category[0]:', props.category[0])
  console.log('props.products:', props.products)
  return (
    <>
      <Helmet title='Loading category... | Get Flowers' />

      <p className='loading'>Loading category...</p>
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
