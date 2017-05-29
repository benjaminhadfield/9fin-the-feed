import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../../components/spinner'
import { Review } from '../../components/list'

const Reviews = ({ loading, reviews }) => {
  return (
    <div>
      { loading
        ? <Spinner name='three-bounce' />
        : reviews.map(review =>
          <Review
            key={review.id}
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

const mapStateToProps = ({ reviews, loading }) => ({ reviews, loading })

export default connect(mapStateToProps)(Reviews)
