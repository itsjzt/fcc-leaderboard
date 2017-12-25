import React from 'react'

const Header = (props) => {
  return (
    <div className='header'>
      <h1 className='header_tagline'>
        FreeCodeCamp's
        <span className='header_small'> Leader Board </span>
      </h1>
      {/* <form className='header_selector'>
        <input className='header_radio' name='sortByTime' value='30Days' id='30Days' type='radio' />
        <label className='header_label' for='30Days' > Last 30 Days  </label>
        <input className='header_radio' name='sortByTime' value='allTime' id='allTime' type='radio' />
        <label className='header_label' for='allTime' > All time </label>
      </form> */}
    </div>
  )
}

export default Header