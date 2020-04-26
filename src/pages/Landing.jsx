import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import LandingPage from '../components/LandingPage'

class Landing extends React.Component {
  render () {
    return (
      <>
        <Helmet>
          <title>Get Flowers</title>
          <meta name='description' content='Get Flowers delivery service' />
        </Helmet>

        { this.props.products ? ( <LandingPage products={this.props.products} /> ) : (<p>No products</p>) }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(Landing)