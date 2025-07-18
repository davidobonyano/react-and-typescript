//  let name:string;
//  let age:number | string;
//  let isPaid:boolean;
//  let hobbies:string[];
//  let role: [number, string];


//  type Person = {
//   name:string;
//   age:number;
//  }
//  let person:Person ={
//   name:"Dave",
//   age: 24
//  }

//  function printname(name:string) {
//   console.log(name)
//  }
//  printname("dave")
// interface Person{
// name:string;
// age:number;
// }
// interface guy extends Person{
//   profession:string
// 
import Inputfield from "./components/inputField"
const App: React.FC = () => {

  return (
    <div>
      <h1 className="Task">Taskify</h1>
      <Inputfield />
    </div>
  )
}

export default App
