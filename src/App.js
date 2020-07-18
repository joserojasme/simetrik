import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import NotFound from './components/notFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
