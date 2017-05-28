import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
// import logo from './logo.svg'
import Tabs from './components/tabs'
import Header from './components/header'
import Updates from './pages/updates'
import Reviews from './pages/reviews'
import Cats from './pages/cats'
import NotFound from './pages/errors/NotFound'

export default () => (
  <Router>
    <div>
      <Header />
      <Tabs tabs={[<Link to='/'>Updates</Link>, <Link to='/reviews'>Reviews</Link>, <Link to='/cats'>Cats</Link>]}>
        <Switch>
          <Route exact path='/' component={Updates} />
          <Route path='/reviews' component={Reviews} />
          <Route path='/cats' component={Cats} />
          <Route component={NotFound} />
        </Switch>
      </Tabs>
    </div>
  </Router>
)
