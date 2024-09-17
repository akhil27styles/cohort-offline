import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div style={{display:"flex"}}>
       <div style={{backgroundColor:"red"}}>red</div>
       <div style={{backgroundColor:"green"}}>green</div>
       <div style={{backgroundColor:"blue"}}>blue</div>
      </div>

      <div className='flex justify-center'>
       <div className='bg-red-500'>red</div>
       <div className='bg-green-500'>green</div>
       <div className='bg-blue-500'>blue</div>
      </div> */}

     {/* <div className='grid grid-cols-10'>
      <div className='bg-blue-500 col-span-4'>hi</div>
      <div className='bg-yellow-500 col-span-2'>hi</div>
      <div className='bg-green-500 col-span-4'>hi</div>
     </div> */}


     {/* <div className='bg-red-500 md:bg-blue-500'>
     hi there
     </div> */}

     <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className='bg-blue-500'>hi there</div>
      <div className='bg-red-500'>hi there</div>
      <div className='bg-yellow-500'>hi there</div>
     </div>
    </>
  )
}

export default App
