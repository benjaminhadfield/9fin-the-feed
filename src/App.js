import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import logo from './logo.svg'
import Tabs from './components/tabs'
import Header from './components/header'
import Updates from './pages/updates'
import Reviews from './pages/reviews'
import Cats from './pages/cats'

export default () => (
  <Router>
    <div>
      <Header />
      <Tabs tabs={[<Link to='/'>Updates</Link>, <Link to='/reviews'>Reviews</Link>, <Link to='/cats'>Cats</Link>]}>
        <Route exact path='/' component={Updates} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/cats' component={Cats} />
      </Tabs>
    </div>
  </Router>
)
