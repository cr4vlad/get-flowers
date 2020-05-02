import * as actionTypes from './actionTypes'

const initialState = {
  categories: [],
  products: {},
  deliveryInfo: {},
  screenWidth: null
}

const getProducts = (state, action) => {
  return {
    ...state,
    products: action.products,
    categories: action.categories
  }
}

const setDeliveryInfo = (state, action) => {
  return {
    ...state,
    deliveryInfo: action.deliveryInfo
  }
}

const setScreenWidth = (state, action) => {
  return {
    ...state,
    screenWidth: action.screenWidth
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return getProducts(state, action)
    case actionTypes.SET_DELIVERY_INFO:
      return setDeliveryInfo(state, action)
    case actionTypes.SET_SCREEN_WIDTH:
      return setScreenWidth(state, action)
    default:
      return state
  }
}

export default reducer
