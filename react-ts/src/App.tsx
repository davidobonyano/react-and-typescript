
import React, {useState} from "react"
import Inputfield from "./components/Inputfield"
import {Todo} from "./model"
const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();

  if(todo) {
    setTodos([...todos, {id: Date.now(), todo, isDone:false}]);
    setTodo("")
  }
  };
  return (
    <div>
      <h1 className="Task">Taskify</h1>
      <Inputfield  todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  )
}

export default App
