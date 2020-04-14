import React from 'react'
import { Helmet } from 'react-helmet'
import LandingCategory from '../components/LandingCategory'

export default function Landing () {
  return (
    <>
      <Helmet>
        <title>Get Flowers</title>
        <meta name='description' content='Get Flowers delivery service' />
      </Helmet>

      <LandingCategory />
    </>
  )
}
