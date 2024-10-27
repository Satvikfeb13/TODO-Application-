import { useState } from 'react'
import { CreateToDo } from './components/CreateToDo'
import './App.css'
import { Todos } from './components/todos'

function App() {
const [todos,setTodos]=useState([]);
fetch("http://localhost:3000/todos")
.then(async (res)=>{
  const json=await res.json();
  setTodos(json.todos);   
})
  return (
    <>
  <div>
  <CreateToDo/>
  <Todos todos={todos}/>
  </div>
    </>
  )
}

export default App
