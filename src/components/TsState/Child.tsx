import React from 'react'

interface Childprops {
    bgColor: string;
    setBgColor: React.Dispatch<React.SetStateAction<string>>
}

const Child = (props:Childprops) => {
  return (
    <div className='ts-state-child'>
        <button onClick={()=>{(props.bgColor === 'white') ? props.setBgColor('red') : props.setBgColor('white')}}>Change background</button>
    </div>
  )
}

export default Child