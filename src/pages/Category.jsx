import React from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import CategoryPage from '../components/CategoryPage'

class Category extends React.Component {
  render () {
    return (
      <>
        <Helmet>
          <title>{ this.props.category.title } | Get Flowers</title>
          <meta name='description' content='Category 1' />
        </Helmet>

        <CategoryPage category={this.props.category} />
      </>
    )
  }
}

const mapStateToProps = state => ({ category: state.products[this.props.match.params.categoryId] })

export default withRouter(connect(mapStateToProps, null)(Category))
