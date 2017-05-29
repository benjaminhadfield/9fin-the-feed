import React from 'react'
import { connect } from 'react-redux'
import { star } from '../../data/actions'
import Spinner from '../../components/spinner'
import {Gif} from '../../components/list'

const Cats = ({ loading, gifs, gifsItemLoading, faves, star }) => {
  return (
    <div>
      { loading
        ? <Spinner name='three-bounce' />
        : gifs.map(t =>
          <Gif
            key={t.id}
            star={() => star('gifs', t.id)}
            src={t.gif_source}
            loading={gifsItemLoading === t.id}
            isFave={faves
              .filter(item => item.dataType === 'gifs')
              .map(item => item.dataId)
              .includes(t.id)}
            href={t.origin_source} />)
      }
    </div>
  )
}

const mapStateToProps = ({ gifs, gifsItemLoading, faves, loading }) => ({ gifs, gifsItemLoading, faves, loading })
const mapDispatchToProps = dispatch => ({
  star: (type, id) => dispatch(star(type, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cats)
