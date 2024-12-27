import { useState } from 'react'
import './App.css'

function App() {
  const [todos,setTodos] = useState([
  {
    id:1,
    title:"Do cp ques from CF",
    description:"Do cp ques of 1000 rating"
  },
  {
    id:2,
    title:"Do cp ques from CC",
    description:"Do cp ques of 4 star rating"
  },
  { 
    id:3,
    title:"Do cp ques from LC",
    description:"Do cp ques of 1500 rating"
  }])


function addTodos(){
  setTodos([...todos, {id:4,
    title:"Do cp ques from HackerRank",
    description:"Do cp ques of 1500 rating"}])
}



  return (
    <div>
      <button onClick={addTodos}>Add Todo </button>
      <AddTodo/>
    <Todo />
    </div>
  )
  function AddTodo() {
    return <div>
      {todos.map(function(todo){
        return <Todo key={todo.id}title = {todo.title} description = {todo.description}/>
      })}
      </div>
  }
}
function Todo({title,description}){
 return <div>
 <h1> {title} </h1>
 <h4> {description} </h4>
 </div>
}

export default App
