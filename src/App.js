import logo from './logo.svg';
import Todolist from './Todo/TodoList';


function App() {

const todos = [ 
  {id: 1, completed: false, title: "Buy bread"},
  {id: 2, completed: false, title: "Buy butter"},
  {id: 3, completed: false, title: "Buy milk"}

]

 function toggleTodo(id) {
    console.log('todo id',id);
 } 


  return (
  <div className="wrapper"> 
    <h1>React TodoList</h1>
      <Todolist todos={todos} onToggle={toggleTodo}/>
  </div>
  
  );
}

export default App;
