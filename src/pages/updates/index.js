import React from 'react'
import Spinner from '../../components/spinner'
import { connect } from 'react-redux'
import { Tweet } from '../../components/list'

const Updates = ({loading, travel}) => {
  return (
    <div>
      { loading
        ? <Spinner name='three-bounce' />
        : travel.map(t =>
          <Tweet
            key={t.id}
            avatar={t.user.profile_image_url_https}
            name={t.user.name}
            profileLink={t.user.url}
            location={t.user.location}
            time={t.created_at}
            content={t.text} />)
      }
    </div>
  )
}

const mapStateToProps = state => {
  const { travel, loading } = state.content
  return { travel, loading }
}

export default connect(mapStateToProps)(Updates)
