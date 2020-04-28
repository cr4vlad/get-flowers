import React from 'react'
import LandingCategoryContainer from '../../containers/LandingCategoryContainer'
import './LandingPage.css'

export default function LandingPage (props) {
  const { categories } = props

  if (!categories) {
    return (
      <p className='loading'>Loading categories...</p>
    )
  }

  return (
    <>
      <div className='hero-image'>
        <div className='hero-content-wrapper'>
          <p className='hero-content'>
            Свежие цветы<br />
            Круглосуточная доставка
          </p>
        </div>
      </div>
      <article>
        {categories.map(category => (
          <LandingCategoryContainer key={category.id} id={category.id} />
        ))}
      </article>
    </>
  )
}
