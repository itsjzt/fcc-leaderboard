import React from 'react'

/*
props: activeView <bool>, onchange <function>
*/
const Header = (props) => {
  return (
    <div className='header'>
      <h1 className='header_tagline'>
        FreeCodeCamp's
        <span className='header_small'> Leader Board </span>
      </h1>
      <form className='header_selector'>
        <label className='form_label'>
          <input className='form_checkbox' type="checkbox" onChange={props.onchange} checked={ props.checked } />
          <span className="form_slider"></span>
        </label>
      </form>
    </div>
  )
}

export default Header