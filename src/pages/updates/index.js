import React from 'react'
import { star, connectToTravelWebsocket } from '../../data/actions'
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
    const {loading, travel, faves, travelItemLoading, travelWebsocketConnected, travelWebsocketLoading, star} = this.props
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
              star={() => star(tweet)}
              isFave={faves
                .filter(item => item.dataType === 'travel')
                .map(item => item.item.id)
                .includes(tweet.id)}
              loading={travelItemLoading === tweet.id}
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
  star: (item) => dispatch(star('travel', item)),
  connectWebsocket: () => dispatch(connectToTravelWebsocket())
})

export default connect(state => state, mapDispatchToProps)(Updates)
