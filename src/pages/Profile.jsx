import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const {d}=useParams()
  return (
    <div>Profile {d}</div>
  )
}

export default Profile