import React from 'react'
import { P } from '../../../components/text'
import { Link } from 'react-router-dom'
import NotFoundGif from '../../../assets/not-found.gif'

export default () => (
  <div>
    <P><img src={NotFoundGif} alt={'This is not the page you\'re looking for'} height={240} /></P>
    <Link to='/'>Go back home</Link>
  </div>
)
