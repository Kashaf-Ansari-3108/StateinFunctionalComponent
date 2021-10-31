import React from 'react'
import {useState} from 'react'

const StateinFunctionNum = () => {
    let [num,setNum] = useState(0);
    return (
        <>
        <h2>My Number</h2>
        <h3>{num}</h3>
   <button className = "box"  onClick = {() => setNum(++num)}>+</button>
   <button className = "box" onClick = {() => setNum(--num)}>-</button>
            
        </>
    )
}

export default StateinFunctionNum
