import React from 'react'
import ProductCard from '../ProductCard'
import { Link } from 'react-router-dom'

export default function LandingCategory (props) {
  const { category, id } = props

  return (
    <>
      { category.title }<br />
      <ProductCard product={category.products[0]} />
      <Link to={`/category/${id}`}>
        Link
      </Link>
    </>
  )
}
