import React from 'react'
import { Helmet } from 'react-helmet'
import CategoryPage from '../components/CategoryPage'

export default function Category () {
  return (
    <>
      <Helmet>
        <title>Category 1 | Get Flowers</title>
        <meta name='description' content='Category 1' />
      </Helmet>

      <CategoryPage />
    </>
  )
}
