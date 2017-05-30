import React from 'react'
import { connect } from 'react-redux'
import { star, connectToReviewsWebsocket } from '../../data/actions'
import Spinner from '../../components/spinner'
import Status from '../../components/status'
import { Review } from '../../components/list'

// a lot of the logic in this class could be abstracted to a HOC for reuse across all pages
class Reviews extends React.Component {
  componentDidMount () {
    if (!this.props.reviewsWebsocketConnected) {
      this.props.connectToWebsocket()
    }
  }

  render () {
    const { loading, reviewsItemLoading, reviews, faves, star, reviewsWebsocketLoading, reviewsWebsocketConnected } = this.props
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
              star={() => star(review)}
              isFave={faves
                .filter(item => item.dataType === 'reviews')
                .map(item => item.item.id)
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
}

const mapDispatchToProps = dispatch => ({
  star: (item) => dispatch(star('reviews', item)),
  connectToWebsocket: () => dispatch(connectToReviewsWebsocket())
})

export default connect(state => state, mapDispatchToProps)(Reviews)
