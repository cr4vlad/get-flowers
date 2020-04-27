import React from 'react'
import LandingCategoryContainer from '../../containers/LandingCategoryContainer'

export default function LandingPage (props) {
  const { categories } = props

  if (!categories) {
    return (
      <p>Loading categories...</p>
    )
  }

  return (
    <>
      { categories.map(category => (
        <LandingCategoryContainer key={category.id} id={category.id} />
      ))}
    </>
  )
}
