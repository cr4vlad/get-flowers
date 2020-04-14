import axios from 'axios'

const URL = 'http://localhost:8000/api'

const fetchProducts = () => {
  console.log(`${URL}/products/`)
  return axios.get(`${URL}/products/`).then(res => {
    return res.data
  }).catch(error => {
    console.log('fetchProducts error, status', error.response)
    return []
  })
}

const addOrder = (order) => {
  return axios.post(`${URL}/orders/`, order).then(res => {
    console.log('Added order:', order)
    return res
  }).catch(error => {
    console.log('addOrder error, status', error.response)
    return []
  })
}

export default {
  fetchProducts: fetchProducts,
  addOrder: addOrder
}
