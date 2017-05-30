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
          const item = fave.item
          switch (fave.dataType) {
            case 'gifs':
              return <Gif
                key={item.id}
                src={item.gif_source}
                href={item.origin_source}
                isFave />
            case 'reviews':
              return <Review
                key={item.id}
                icon={item.image_url}
                rating={item.rating}
                categories={item.categories}
                price={item.price}
                phone={item.phone}
                name={item.name}
                isFave />
          }
        })
      }
    </div>
  )
}

export default connect(state => state)(Reviews)
