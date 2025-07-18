

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}
export default function Inputfield({todo, setTodo}:Props) {
  return (
   <form>
    <input type="input"
    value={todo} 
    onChange={(e) => setTodo(e.target.value)} placeholder="enter a text" />
    <button>Go</button>
   </form>
  )
}
