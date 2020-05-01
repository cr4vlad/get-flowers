import React from 'react'
import { connect } from 'react-redux'
import CreateOrder from '../components/CreateOrder'
import { addOrder } from '../store/actions'

class OrderContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: (this.props.deliveryInfo.name ? this.props.deliveryInfo.name : ''),
      address: (this.props.deliveryInfo.address ? this.props.deliveryInfo.address : ''),
      phone_number: (this.props.deliveryInfo.phone_number ? this.props.deliveryInfo.phone_number : '')
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const orderInfo = { ...this.state, product: this.props.product.id }
    this.props.newOrder(orderInfo)
    this.props.onClose()
  }

  render () {
    const { name, address, phone_number } = this.state

    return (
      <CreateOrder
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        name={name}
        address={address}
        phone_number={phone_number}
        product={this.props.product}
        onClose={this.props.onClose}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    deliveryInfo: state.data.deliveryInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newOrder: order => dispatch(addOrder(order))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderContainer)