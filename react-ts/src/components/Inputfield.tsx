

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e) => void;
}
export default function Inputfield({todo, setTodo,handleAdd}:Props) {
  return (
   <form onSubmit={handleAdd}>
    <input type="input"
    value={todo} 
    onChange={(e) => setTodo(e.target.value)} placeholder="enter a text" />
    <button>Go</button>
   </form>
  )
}
