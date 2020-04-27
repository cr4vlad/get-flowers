import React from 'react'
import ProductCard from '../ProductCard'
import { Link } from 'react-router-dom'

export default function LandingCategory (props) {
  const { category, products } = props

  if (!category || !products) {
    console.log('LandingCategory props.category:', category)
    console.log('LandingCategory props.products:', products)

    return (
      <p>Loading category...</p>
    )
  }

  return (
    <>
      {category.title}<br />

      <ProductCard product={products[0]} />

      <Link to={`/category/${category.id}`}>
        Link
      </Link>
    </>
  )
}
