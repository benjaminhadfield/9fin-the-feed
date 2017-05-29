import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../../components/spinner'
import { Tweet, Review, Gif } from '../../components/list'

const Reviews = ({ loading, faves, gifs, reviews, travel }) => {
  return (
    <div>
      { loading
        ? <Spinner name='three-bounce' />
        : faves.map(fave => {
          switch (fave.dataType) {
            case 'gifs':
              const gif = gifs.find(gif => gif.id === fave.dataId)
              return <Gif key={gif.id} src={gif.gif_source} href={gif.origin_source} isFave />
          }
        })
      }
    </div>
  )
}

export default connect(state => state)(Reviews)
