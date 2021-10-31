import React from 'react'
import { useState } from 'react'

const StateinFunctionArray = () => {

const [num,setNum] = useState(0);
const [arr,setArr] = useState(["html","css","Es6","React"]);


    return (
        <div>
            <h2>My Array</h2>
           <ul className = "myArray"> {arr.map((value,index) => (<li>My Skill No. {index+1} is: {value}</li>))} </ul>
        
         </div>
    )
}

export default StateinFunctionArray
