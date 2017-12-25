import React from 'react'

const ProfileCard = (props) =>  {
  return (
    <div className='card'>
      <img className='card_img' src={props.user.img} alt={ `${props.user.username}'s pic` } />
      <div className='card_name'> {props.user.username} </div>
      <div className='card_points_tab'>
        <div className='card_points'>
          <div className='card_points_time'>Last 30 Days</div>
          <div className='card_points_value'>99</div>
        </div>
        <div className='card_points'>
          <div className='card_points_time'>All time</div>
          <div className='card_points_value'>564</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard