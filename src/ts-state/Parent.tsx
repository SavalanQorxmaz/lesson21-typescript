import React, { CSSProperties, useEffect, useState } from 'react'
import Child from './Child'



const Parent = () => {

  // type ParentProps = {
  //   changeColor:string;
  //   setChangeColor: React.Dispatch<React.SetStateAction<string>>
  // }
  
  const [changeColor, setChangeColor] = useState<string>('black')

  const inlineStyle:CSSProperties = {
    backgroundColor: changeColor,


  }


 

  return (
    <div className='ts-state-parent' style={inlineStyle}>
      <Child changeColor = {changeColor} setChangeColor = {setChangeColor}/>
    </div>
  )
}

export default Parent