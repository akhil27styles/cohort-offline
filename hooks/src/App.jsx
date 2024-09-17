import { useState } from 'react';
import './App.css'
import { useMemo } from 'react';
import UsedMem from './UsedMem';

export default function App() {
  const [count,setCount]=useState(0);
  const [inputValue,setInputValue]=useState('');
  let counter=useMemo(()=>{
    console.log('i am called');
    let finalCount=0;
    for(let i=1;i<=inputValue;i++){
      finalCount=finalCount+i;
    }
    return finalCount;
  },[inputValue])
  // for(let i=0;i<=inputValue;i++){
  //   console.log('i am called')
  //   counter+=i;
  // }
  return (
    <main>
      <input onChange={(e)=>setInputValue(e.target.value)}/>
      Sum from 1 to {inputValue} is {counter}
    <br/>
    <br/>
    <button onClick={()=>setCount(count+1)}>Counter{count}</button>
   <UsedMem/>
    </main>
  )
}
