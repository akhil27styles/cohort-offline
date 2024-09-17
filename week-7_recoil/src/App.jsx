import React from 'react'
import { RecoilRoot, useRecoilValue ,useSetRecoilState} from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

const App = () => {
  return (
    <div>
      <RecoilRoot>
      <Count/>
      </RecoilRoot>
    </div>
  )
}
const Count=()=>{
 return <div>
  <CountRenderer/>
  <Buttons/>
 </div> 
}
const CountRenderer=()=>{
  const count=useRecoilValue(countAtom);
  return(
    <div>
     <b>{count}</b>
     <EvenCountRenderer/>
    </div>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

function EvenCountRenderer(){
  const isEven=useRecoilValue(evenSelector);
  return <div>
    {(isEven%2==0)?"It is even":null}
  </div>
}

export default App

