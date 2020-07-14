import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Redirect from './Redirect'

const portfolioUrl = 'http://www.georgekeesjones.com'

const routes = [
  {
    path: 'celeb',
    url: 'https://github.com/Jompra/Celebrity-Lookalike'
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
    url: 'https://github.com/Jompra/Filtr'
  },
  {
    path: 'plntify',
    url: 'https://plntify.herokuapp.com'
  },
  {
    path: 'plntify-repo',
    url: 'https://github.com/Jompra/Plntify-Swapshop'
  },
  {
    path: 'pup',
    url: 'https://jompra.github.io/sei-project-one/'
  },
  {
    path: 'pup-repo',
    url: 'https://github.com/Jompra/Pupper-Game'
  },
  {
    path: 'url-repo',
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
      <Route path='*' component={() => (
        window.location.href = portfolioUrl
      )} />
    </Switch>
  </BrowserRouter >
)

export default App
