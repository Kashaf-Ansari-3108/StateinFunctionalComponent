import React from 'react'
import { useState } from 'react';

const StateinFunctionStr = () => {
    let [str,setStr] = useState(true);
    return (
        <div>
            <h2>My String</h2>
            <h3>Name: {str}</h3>
        <button className = "box" onClick = {() => setStr("Kashaf Ansari")}>ClickMe</button>
        </div>
    )
}

export default StateinFunctionStr
