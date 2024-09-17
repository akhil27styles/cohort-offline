
import { RecoilRoot, useRecoilState ,useSetRecoilState} from 'recoil';
import { todosAtomFamily } from './todoAtom';
import { useEffect } from 'react';

function TodoApp() {
  return <RecoilRoot>
    <UpdaterComponent/>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id))
  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

const UpdaterComponent=()=>{
    const updateTodo = useSetRecoilState(todosAtomFamily(2));
    useEffect(() => {
      setTimeout(() => {
          updateTodo({
              id:"2",
              title:"new todo",
              description:"new desc"
          })
      },5000);
      return () => {
      }
    }, [])
}
export default TodoApp
