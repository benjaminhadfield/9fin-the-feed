import React from 'react'
import { connectToTravelWebsocket } from '../../data/actions'
import Spinner from '../../components/spinner'
import { connect } from 'react-redux'
import { Tweet } from '../../components/list'

class Updates extends React.Component {
  componentDidMount () {
    this.props.connectToTravelWebsocket()
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

const mapStateToProps = ({ travel, loading }) => ({ travel, loading })

const mapDispatchToProps = dispatch => ({
  connectToTravelWebsocket: () => dispatch(connectToTravelWebsocket())
})

export default connect(mapStateToProps, mapDispatchToProps)(Updates)
