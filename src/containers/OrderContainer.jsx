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
      phone_number: (this.props.deliveryInfo.phone_number ? this.props.deliveryInfo.phone_number : ''),
      formErrors: []
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, address, phone_number } = this.state
    const formErrors = []

    if (!name.match(/^[A-ZА-Я][a-zA-Zа-яА-Я'-]+ [a-zA-Zа-яА-Я'-]+( [A-ZА-Я][a-zA-Zа-яА-Я'-]+)?$/)) {
      formErrors.push('Некорректное имя (поле №1) (минимум 2 слова с заглавных букв через пробел)')
    }

    if (!address.match(/^[a-zA-Zа-яА-Я0-9][a-zA-Zа-яА-Я0-9., ]+[a-zA-Zа-яА-Я0-9.]$/)) {
      formErrors.push('Некорректный адрес (поле №2)')
    }

    if (!phone_number.match(/^(\+?([0-9]{2}) ?)?(\([0-9]{3}\) ?|[0-9]{3}-?)[0-9]{3}(-| )?[0-9]{2}(-| )?[0-9]{2}$/)) {
      formErrors.push('Некорректный телефонный номер (поле №3)')
    }

    if (!formErrors.length) {
      const orderInfo = {
        name: name,
        address: address,
        phone_number: phone_number,
        product: this.props.product.id
      }
      this.props.newOrder(orderInfo)
      this.props.onClose()
    } else {
      this.setState({ formErrors: formErrors })
    }
  }

  render () {
    return (
      <CreateOrder
        {...this.state}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
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