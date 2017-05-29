import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../../components/spinner'
import {Gif} from '../../components/list'

const Cats = ({ loading, gifs }) => {
  return (
    <div>
      { loading
        ? <Spinner name='three-bounce' />
        : gifs.map((t, i) =>
          <Gif
            key={t.id}
            src={t.gif_source}
            href={t.origin_source} />)
      }
    </div>
  )
}

const mapStateToProps = ({ gifs, loading }) => ({ gifs, loading })

export default connect(mapStateToProps)(Cats)
