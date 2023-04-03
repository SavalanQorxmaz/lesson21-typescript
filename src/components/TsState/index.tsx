import React, { CSSProperties, useState } from 'react'
import Child from './Child'
import './ts-state.scss'




const TsState = () => {



    const [bgColor, setBgColor] = useState('white')

    const style:CSSProperties = {
        backgroundColor : bgColor,
    }
  return (
    <div className='ts-state' style={style}>
        <Child bgColor = {bgColor} setBgColor = {setBgColor}/>
        </div>
  )
}

export default TsState