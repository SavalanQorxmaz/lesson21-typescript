import React from 'react'

import { ChildProps } from './model'

const Child = ({changeColor, setChangeColor}:ChildProps) => {
  return (
    <div className='ts-state-child'>
      <button onClick={()=>{(changeColor =='black') ? setChangeColor('red') : setChangeColor('black')}}>deyis</button>
    </div>
  )
}

export default Child