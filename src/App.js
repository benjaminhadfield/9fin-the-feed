import React from 'react'
import axios from 'axios'
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
import Faves from './pages/faves'
import NotFound from './pages/errors/NotFound'

export default class extends React.Component {
  componentDidMount () {
    axios.get('https://the-london-feed.herokuapp.com/sync')
      .then(res => console.log(res.data))
  }

  render () {
    return (
      <Router>
        <div>
          <Header />
          <Tabs tabs={[
            {label: 'Updates', to: '/'},
            {label: 'Reviews', to: '/reviews'},
            {label: 'Cats!', to: '/cats'},
            {label: 'Faves', to: '/faves'}
          ]}>
            <Switch>
              <Route exact path='/' component={Updates} />
              <Route path='/reviews' component={Reviews} />
              <Route path='/cats' component={Cats} />
              <Route path='/faves' component={Faves} />
              <Route component={NotFound} />
            </Switch>
          </Tabs>
        </div>
      </Router>
    )
  }
}
