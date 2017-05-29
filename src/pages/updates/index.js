import React from 'react'
import { connectToTravelWebsocket } from '../../data/actions'
import Spinner from '../../components/spinner'
import { connect } from 'react-redux'
import { Tweet } from '../../components/list'

class Updates extends React.Component {
  componentDidMount () {
    this.props.connectWebsocket()
  }

  render () {
    const {loading, travel} = this.props
    return (
      <div>
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

const mapStateToProps = ({ travel, loading }) => ({ travel, loading })

const mapDispatchToProps = dispatch => ({
  connectWebsocket: () => dispatch(connectToTravelWebsocket())
})

export default connect(mapStateToProps, mapDispatchToProps)(Updates)
