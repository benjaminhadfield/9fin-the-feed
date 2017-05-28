import React from 'react'
import Spinner from '../../components/spinner'
import { connect } from 'react-redux'
import { Tweet } from '../../components/list'
import io from 'socket.io-client'

const socket = io('http://the-london-feed.herokuapp.com/travel')

class Updates extends React.Component {
  componentDidMount () {
    console.log('connecting...')
    socket.on('connect', () => {
      console.log('connected to /travel', socket.id)
    })
  }

  render () {
    const {loading, travel} = this.props
    return (
      <div>
        { loading
          ? <Spinner name='three-bounce' />
          : travel.map(t =>
            <Tweet
              key={t.id}
              avatar={t.user.profile_image_url_https}
              name={t.user.name}
              profileLink={t.user.url}
              location={t.user.location}
              time={t.created_at}
              content={t.text} />)
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { travel, loading } = state.content
  return { travel, loading }
}

export default connect(mapStateToProps)(Updates)
