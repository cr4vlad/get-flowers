import React from 'react'
import { connect } from 'react-redux'
import CreateOrder from '../components/CreateOrder'
import { addOrder } from '../store/actions'

class OrderContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      phone_number: '',
      product: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    addOrder(this.state)
  }

  render () {
    return (
      <>
        <CreateOrder onSubmit={this.handleSubmit} />
      </>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addOrder: () => dispatch(addOrder(ownProps))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(OrderContainer)