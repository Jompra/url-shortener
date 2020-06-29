import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Redirect from './Redirect'

const portfolioUrl = 'http://www.georgekeesjones.com'

const routes = [
  {
    path: 'celeb',
    url: 'https://find-your-celebrity-lookalike.netlify.app'
  },
  {
    path: 'celeb-repo',
    url: 'https://github.com/Jompra/sei-project-2'
  },
  {
    path: 'filtr',
    url: 'https://filtr-app.herokuapp.com'
  },
  {
    path: 'filtr-repo',
    url: 'https://github.com/Jompra/filtr'
  },
  {
    path: 'plntify',
    url: 'https://plntify.herokuapp.com'
  },
  {
    path: 'plntify-repo',
    url: 'https://github.com/Jompra/sei-group-project'
  },
  {
    path: 'pup',
    url: 'https://jompra.github.io/sei-project-one/'
  },
  {
    path: 'pup-repo',
    url: 'https://github.com/Jompra/sei-project-one'
  }
]

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={() => (
        window.location.href = portfolioUrl
      )} />
      {routes.map(route => (
        <Route
          key={route.path}
          path={`/${route.path}`}
          render={(routeProps) => (
            <Redirect {...routeProps} {...route} />
          )} />
      ))}
    </Switch>
  </BrowserRouter >
)

export default App
