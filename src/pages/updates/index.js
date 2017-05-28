import React from 'react'
import { connect } from 'react-redux'
import { Tweet } from '../../components/list'

const Updates = ({loading, travel}) => {
  console.log(loading, travel)
  return (
    <div>
      { loading
        ? 'Loading...'
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
