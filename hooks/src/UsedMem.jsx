import React, { useState } from 'react'

const UsedMem = () => {
    const [counter, setcounter] = useState(0);
 var a={};
  return (
    <div>
   
        <button onClick={()=>{
            setcounter(counter+1)
        }}>Counter {(counter)}</button>
        <Demo a={a}/>
    </div>
  )
}

export default UsedMem

const Demo=({a})=>{
    console.log('redener');
    return (
        <div>
            hi there
        </div>
    )
}