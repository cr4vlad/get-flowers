import axios from 'axios'
import * as actionTypes from './actionTypes'

const URL = 'http://localhost:8000/api'

export const updateProducts = products => {
  return {
    type: actionTypes.GET_PRODUCTS,
    products: products
  }
}

export const updateDeliveryInfo = deliveryInfo => {
  return {
    type: actionTypes.SET_DELIVERY_INFO,
    deliveryInfo: deliveryInfo
  }
}

export const fetchProducts = () => {
  return dispatch => {
    axios.get(`${URL}/products/`).then(res => {
      dispatch(updateProducts(res.data))
    }).catch(error => {
      console.log('updateProducts error, status', error.response)
    })
  }
}

export const addOrder = order => {
  return dispatch => {
    axios.post(`${URL}/orders/`, order).then(res => {
      console.log('Added order:', order)
      console.log('Result:', res)
      const deliveryInfo = {}
      for (const i in order) {
        if (i !== 'product') {
          deliveryInfo[i] = order[i]
        }
      }
      dispatch(updateDeliveryInfo(deliveryInfo))
    }).catch(error => {
      console.log('addOrder error, status', error.response)
    })
  }
}
