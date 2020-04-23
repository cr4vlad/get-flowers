import React from 'react'
import { Helmet } from 'react-helmet'
import LandingPage from '../components/LandingPage'

export default function Landing () {
  return (
    <>
      <Helmet>
        <title>Get Flowers</title>
        <meta name='description' content='Get Flowers delivery service' />
      </Helmet>

      <LandingPage />
    </>
  )
}
