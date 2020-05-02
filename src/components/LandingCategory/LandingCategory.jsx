import React from 'react'
import ProductCard from '../ProductCard'
import { Link } from 'react-router-dom'
import './LandingCategory.css'

export default function LandingCategory (props) {
  const { category, products, screenWidth } = props

  if (!category || !products || !screenWidth) {
    console.log('LandingCategory props.category:', category)
    console.log('LandingCategory props.products:', products)
    console.log('LandingCategory props.screenWidth:', screenWidth)

    return (
      <p className='loading'>Loading category...</p>
    )
  }

  let rowItems = 3
  if (screenWidth < 800) rowItems = 2

  return (
    <>
      <Link to={`/category/${category.id}`}>
        <h2 className='landing'>{category.title}</h2>
      </Link>

      <div className='grid-container--landing'>
        {products.slice(0, rowItems).map(product => (
          <ProductCard key={product.id} product={product} showModal={props.showModal} />
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
