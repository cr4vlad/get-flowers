import React from 'react'
import './ProductCard.css'

export default function ProductCard (props) {
  const { product } = props

  if (!product) {
    return (
      <p className='loading'>Loading product...</p>
    )
  }

  return (
    <div className='card'>
      <div className='img-block'>
        <img alt={product.title} src={product.logo} />
      </div>

      <h3 className='title'>{product.title}</h3>

      <div className='price-line'>
        <p> {product.price} грн</p>
        <button className='order'>Заказать</button>
      </div>
    </div>
  )
}
