import React, { useState } from 'react'

const TsHTMLElement = () => {

    const [item, setItem] = useState<string>('')
    const [data, setData] = useState<string[]>([])

    const showValue:React.ChangeEventHandler<HTMLInputElement> =(e)=>{
console.log(e.target.value)
setItem(e.target.value)
    }

    const getValue = ()=>{  
        setData([...data,item])
        setItem('')
        console.log(data)
    }

  return (
    <div>
        <button onClick={getValue}>Click me</button>
        <input value={item} type="text" onChange={showValue} />
        <ul>
            {
                data.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default TsHTMLElement