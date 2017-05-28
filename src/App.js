import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
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
      <Tabs tabs={[
        {label: 'Updates', to: '/'},
        {label: 'Reviews', to: '/reviews'},
        {label: 'Cats!', to: '/cats'}
      ]}>
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
