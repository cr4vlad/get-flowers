import React, { useState } from 'react'
import './ProductCard.css'
import OrderContainer from '../../containers/OrderContainer'

export default function ProductCard (props) {
  const [showModal, setModal] = useState(false)
  const { product } = props

  if (!product) {
    return (
      <p className='loading'>Loading product...</p>
    )
  }

  return (
    <div className='card'>
      <div className='img-block'>
        <img alt={product.title} src={require(`../../assets/products/${product.category}/${product.logo}`)} />
      </div>

      <h3 className='card-title'>{product.title}</h3>

      <div className='price-line'>
        <p> {product.price} грн</p>
        <button onClick={() => setModal(true)} className='order'>Заказать</button>
      </div>
      {showModal && (<OrderContainer product={product} onClose={() => setModal(false)} />)}
    </div>
  )
}
