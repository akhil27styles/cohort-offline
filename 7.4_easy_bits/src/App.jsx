import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'
import AsyncRec from './compoents/AsyncRec'
import TodoApp from './compoents/TodoApp'
import FamTodo from './compoents/selector-family/FamTodo'

const App = () => {
return(
  <RecoilRoot>
    {/* <MainApp/> */}
    {/* <AsyncRec/> */}
    {/* <TodoApp/> */}
    <FamTodo/>
  </RecoilRoot>
)
}
const MainApp=()=>{
  const networkNotificationCount=useRecoilValue(networkAtom);
  const jobsAtomCount=useRecoilValue(jobsAtom);
  const notificationAtomCount=useRecoilValue(notificationAtom);
  const messagingAtomCount=useRecoilValue(messagingAtom);
  const totalNotificationCount=useRecoilValue(totalNotificationSelector);
  return (
    <>
    <button>Home</button>
    <button>My network ({ networkNotificationCount>=100?"99+":networkNotificationCount})</button>
    <button>Jobs ({jobsAtomCount})</button>
    <button>Messaging ({messagingAtomCount})</button>
    <button>Notifications ({notificationAtomCount})</button>
    <button>Me ({ totalNotificationCount})</button>
    </>
  )
}

export default App