import React from 'react'
import './ProductCard.css'

export default function ProductCard (props) {
  const { product } = props

  if (!product) {
    return (
      <p>Loading product...</p>
    )
  }

  return (
    <div className='card'>
      <div className='imgBlock'>
        <img alt={product.title} src={product.logo} />
      </div>

      <h6 className='title'>{product.title}</h6>

      <div className='priceLine'>
        <h6 className='price'> {product.price} грн</h6>
        <button>Замовити</button>
      </div>
    </div>
  )
}
