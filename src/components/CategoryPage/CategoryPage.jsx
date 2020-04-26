import React from 'react'
import ProductCard from '../ProductCard'

export default function CategoryPage (props) {
  const { category } = props

  return (
    <>
      { category.title }<br />
      <ProductCard product={category.products[0]} />
    </>
  )
}
