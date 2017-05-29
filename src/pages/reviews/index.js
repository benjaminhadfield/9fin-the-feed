import React from 'react'
import { connect } from 'react-redux'
import { star } from '../../data/actions'
import Spinner from '../../components/spinner'
import { Review } from '../../components/list'

const Reviews = ({ loading, reviewsItemLoading, reviews, faves, star }) => {
  return (
    <div>
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

const mapStateToProps = ({ reviews, faves, reviewsItemLoading, loading }) => ({ reviews, faves, reviewsItemLoading, loading })

const mapDispatchToProps = dispatch => ({
  star: (type, id) => dispatch(star(type, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
