import React from 'react'
import LandingCategory from '../LandingCategory'

export default function LandingPage (props) {
  const ids = Object.keys(props.products)

  return ( // for each category:
    <LandingCategory category={props.products[0]} id={ids[0]} />
  )
}
