import React from 'react'
import ProfileCard from './ProfileCard'

// Required props: users <array>
const AllProfiles = (props) => {
  const users = props.users
  return (
    <div className='profiles_wrapper'>
      {
        users.map( (user, id) => <ProfileCard key={id} user={user} /> )
      }
    </div>
  )
}

export default AllProfiles