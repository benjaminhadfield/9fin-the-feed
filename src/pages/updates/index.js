import React from 'react'
import { connect } from 'react-redux'
import { Tweet } from '../../components/list'

const Updates = ({loading, travel}) => {
  console.log(loading, travel)
  return (
    <div>
      { loading
        ? 'Loading...'
        : travel.map(t => <Tweet key={t.id} content={t.text} />) }
    </div>
  )
}

const mapStateToProps = state => {
  const { travel, loading } = state.content
  return { travel, loading }
}

export default connect(mapStateToProps)(Updates)
