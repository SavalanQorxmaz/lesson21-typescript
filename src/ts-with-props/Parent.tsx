import React from 'react'
import Child from './Child'



const Parent = () => {

  const data = {
    firstName: 'firstname',
    lastName: 'lastname',
    age: 25,
    address: {
      street: 'street',
      home: 10
    },
    family: ['boy', 'girl', 'wife'],
  }
  return (
    <div className='ts-props-parent'>
      <Child data =  {data}/>
    </div>
    
  )
}

export default Parent