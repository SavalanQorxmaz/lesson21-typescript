
import React from 'react'
import {HeaderProps} from './model'

const Header:React.FC<HeaderProps> = ({count}) => {
  return (
  <div>
      <div className='header-back'>
      <div className='header'>
        <label htmlFor="count">Counter
        <span id='count' style={{color:'green', fontSize: '30px'}}>{count}</span></label>

      </div>
    </div>
  </div>
  )
}

export default Header