import React from 'react'
import { ChildProps } from './model'

const Child = (props:{data:ChildProps}) => {

  const {firstName, lastName, address, age,family} = props.data
  return (
    <div className='ts-props-child'>
      <ul>
        <li>{firstName}</li>
        <li>{lastName}</li>
        <li>{age}</li>
        <li>{family}</li>
        <li><ul>
          <li>{address.home}</li>
          <li>{address.street}</li>
          </ul></li>
      </ul>
    </div>
  )
}

export default Child