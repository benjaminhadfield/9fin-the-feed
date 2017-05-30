import React from 'react'
import { connectToTravelWebsocket } from '../../data/actions'
import Spinner from '../../components/spinner'
import Status from '../../components/status'
import { connect } from 'react-redux'
import { Tweet } from '../../components/list'

// a lot of the logic in this class could be abstracted to a HOC for reuse across all pages
class Updates extends React.Component {
  componentDidMount () {
    if (!this.props.travelWebsocketConnected) {
      this.props.connectWebsocket()
    }
  }

  render () {
    const {loading, travel, travelWebsocketConnected, travelWebsocketLoading} = this.props
    return (
      <div>
        <Status
          websocketLoading={travelWebsocketLoading}
          websocketConnected={travelWebsocketConnected} />
        { loading
          ? <Spinner name='three-bounce' />
          : travel.map(tweet =>
            <Tweet
              key={tweet.id}
              icon={tweet.user.profile_image_url_https}
              name={tweet.user.name}
              profileLink={tweet.user.url}
              location={tweet.user.location}
              time={tweet.created_at}
              content={tweet.text} />)
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  connectWebsocket: () => dispatch(connectToTravelWebsocket())
})

export default connect(state => state, mapDispatchToProps)(Updates)
