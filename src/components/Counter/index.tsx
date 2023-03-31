import React from 'react'
import {CounterProps} from './model'


interface funcType {
  myFunc: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const myFunc = (e:{target:{value:string}})=>{
  console.log(e.target.value)
}

const Counter:React.FC<CounterProps> = ({count, setCount}) => {
  return (
    <div className='counter'>
      <button onClick={()=>{setCount(count - 1)}}>Decrement</button>
      <button onClick={()=>{setCount(count + 1)}}>Increment</button>

      <input onChange={myFunc} type="text" placeholder='metn daxil et' />
    </div>
  )
}

export default Counter