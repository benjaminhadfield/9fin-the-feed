import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../../components/spinner'
import {Review} from '../../components/list'

const Reviews = ({ loading, reviews }) => {
  return (
    <div>
      { loading
        ? <Spinner name='three-bounce' />
        : reviews.map((t, i) =>
          <Review
            key={t.id}
            icon={t.image_url}
            rating={t.rating}
            categories={t.categories}
            price={t.price}
            phone={t.phone}
            name={t.name} />)
      }
    </div>
  )
}

const mapStateToProps = ({ reviews, loading }) => ({ reviews, loading })

export default connect(mapStateToProps)(Reviews)
