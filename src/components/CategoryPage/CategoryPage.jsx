import React from 'react'
import ProductCard from '../ProductCard'
import './CategoryPage.css'

export default function CategoryPage (props) {
  const { title, products } = props

  if (!title || !products) {
    console.log('props.title:', title)
    console.log('props.products:', products)
    return (
      <p className='loading'>Loading category...</p>
    )
  }

  const heroImage = require(`../../assets/${products[0].category}.jpg`)

  return (
    <>
      <div className='hero-image' style={{background: "center / cover no-repeat url('" + heroImage + "')"}} />

      <article>
        <h2 className='category'>{title}</h2>

        <div className='grid-container--category'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </article>
    </>
  )
}
