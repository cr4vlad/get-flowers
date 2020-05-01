import axios from 'axios'
import * as actionTypes from './actionTypes'

const URL = 'https://get-flowers.herokuapp.com/api'
// const URL = 'http://localhost:8000/api'

export const updateProducts = (categories, products) => {
  return {
    type: actionTypes.GET_PRODUCTS,
    categories: categories,
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
    console.log('fetchProducts start')
    axios.get(`${URL}/categories/`).then(res => {
      const categories = res.data

      axios.get(`${URL}/products/`).then(res => {
        const arr = categories.map(category => {
          return [category.id,
            res.data.filter(product => {
              return product.category === category.id
            })
          ]
        })

        const products = Object.fromEntries(arr) // {cId: [products], ...}

        console.log('categories dispatching to redux state:', categories)
        console.log('products dispatching to redux state:', products)
        dispatch(updateProducts(categories, products))
      }).catch(error => {
        console.log('fetchProducts error while getting products, status', error.response)
      })
    }).catch(error => {
      console.log('fetchProducts error while getting categories, status', error.response)
    })
  }
}

export const addOrder = order => {
  return dispatch => {
    axios.post(`${URL}/orders/`, order).then(res => {
      console.log('Added order:', order)
      console.log('Result:', res)
      const deliveryInfo = {}
      for (var i in order) {
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
