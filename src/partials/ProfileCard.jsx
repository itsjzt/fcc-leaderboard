import React from 'react'

const ProfileCard = (props) =>  {
  return (
    <div className='card'>
      <img className='card_img' src={'https://reactarmory.com/james.jpg'} alt='lorem' />
      <div className='card_name'> {`Lorem User`} </div>
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