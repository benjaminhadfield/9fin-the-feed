import React from 'react'
import { connect } from 'react-redux'
import { star } from '../../data/actions'
import Spinner from '../../components/spinner'
import Status from '../../components/status'
import { Review } from '../../components/list'

// a lot of the logic in this class could be abstracted to a HOC for reuse across all pages
const Reviews = ({ loading, reviewsItemLoading, reviews, faves, star, reviewsWebsocketLoading, reviewsWebsocketConnected }) => {
  return (
    <div>
      <Status
        websocketLoading={reviewsWebsocketLoading}
        websocketConnected={reviewsWebsocketConnected} />
      { loading
        ? <Spinner name='three-bounce' />
        : reviews.map(review =>
          <Review
            key={review.id}
            star={() => star('reviews', review.id)}
            isFave={faves
              .filter(item => item.dataType === 'reviews')
              .map(item => item.dataId)
              .includes(review.id)}
            loading={reviewsItemLoading === review.id}
            icon={review.image_url}
            rating={review.rating}
            categories={review.categories}
            price={review.price}
            phone={review.phone}
            name={review.name} />)
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  star: (type, id) => dispatch(star(type, id))
})

export default connect(state => state, mapDispatchToProps)(Reviews)
