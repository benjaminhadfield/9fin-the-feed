import React from 'react'
import { connect } from 'react-redux'
import { star, connectToGifsWebsocket } from '../../data/actions'
import Spinner from '../../components/spinner'
import Status from '../../components/status'
import { Gif } from '../../components/list'

// a lot of the logic in this class could be abstracted to a HOC for reuse across all pages
class Cats extends React.Component {
  componentDidMount () {
    if (!this.props.gifsWebsocketConnected) {
      this.props.connectToWebsocket()
    }
  }

  render () {
    const { loading, gifs, gifsItemLoading, faves, star, gifsWebsocketLoading, gifsWebsocketConnected } = this.props
    return (
      <div>
        <Status
          websocketLoading={gifsWebsocketLoading}
          websocketConnected={gifsWebsocketConnected} />
        { loading
          ? <Spinner name='three-bounce' />
          : gifs.map(gif =>
            <Gif
              key={gif.id}
              star={() => star(gif)}
              src={gif.gif_source}
              loading={gifsItemLoading === gif.id}
              isFave={faves
                .filter(item => item.dataType === 'gifs')
                .map(item => item.dataId)
                .includes(gif.id)}
              href={gif.origin_source} />)
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  star: (item) => dispatch(star('gifs', item)),
  connectToWebsocket: () => dispatch(connectToGifsWebsocket())
})

export default connect(state => state, mapDispatchToProps)(Cats)
