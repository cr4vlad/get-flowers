import React from 'react'
import ProductCard from '../ProductCard'
import { Link } from 'react-router-dom'
import './LandingCategory.css'

export default function LandingCategory (props) {
  const { category, products } = props

  if (!category || !products) {
    console.log('LandingCategory props.category:', category)
    console.log('LandingCategory props.products:', products)

    return (
      <p className='loading'>Loading category...</p>
    )
  }

  return (
    <>
      <Link to={`/category/${category.id}`}>
        <h2 className='landing'>{category.title}</h2>
      </Link>

      <div className='grid-container--landing'>
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>

      <Link to={`/category/${category.id}`}>
        <p className='category-link'>
          {category.title}
        </p>
      </Link>
    </>
  )
}
