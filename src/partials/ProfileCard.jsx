import React from 'react'

const ProfileCard = (props) =>  {
  const user = props.user
  return (
    <div className='card'>
      <img className='card_img' src={user.img} alt={ `${user.username}'s pic` } />
      <div className='card_name'> {user.username} </div>
      <div className='card_points_tab'>
        <div className='card_points'>
          <div className='card_points_time'>Last 30 Days</div>
          <div className='card_points_value'> {user.recent} </div>
        </div>
        <div className='card_points'>
          <div className='card_points_time'>All time</div>
          <div className='card_points_value'> {user.alltime} </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard