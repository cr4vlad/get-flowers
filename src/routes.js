import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing'
import Category from './pages/Category'

function BaseRouter () {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/category/:categoryId' component={Category} />
      <Route>404 Page not found</Route>
    </Switch>
  )
}

export default BaseRouter
