import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../../components/spinner'

const Reviews = ({ loading, reviews }) => {
  return (
    <div>
      { loading
        ? <Spinner name='three-bounce' />
        : reviews.map(t =>
          <div children='review' />)
      }
    </div>
  )
}

const mapStateToProps = state => {
  const { reviews, loading } = state.content
  return { reviews, loading }
}

export default connect(mapStateToProps)(Reviews)
