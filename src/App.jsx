import {useState} from 'react';

export default function App() {
const [todos,setTodos]=useState([]);
const [input,setInput]=useState("");
const [edittodo,seteditTodo]=useState(0);
const handleChange=(e)=>{
    setInput(e.target.value);
}
const handleSubmit = (e) => {
  e.preventDefault();
  if (edittodo) {
    const edit = todos.find((todo) => todo.id === edittodo);
    const updatedTodos = todos.map((todo) =>
      todo.id === edit.id
        ? { ...todo, value: input } // Update the value of the todo object
        : todo
    );
    setTodos(updatedTodos);
    seteditTodo(0); // Reset edit todo after update
    setInput(""); // Clear input after update
    return ;
  }

  if (input !== "") {
    const newTodos = {
      id: Math.random() * Date.now(),
      value: input,
    };
    setTodos([...todos, newTodos]);
    setInput(""); // Clear input after adding new todo
      return;
  }
};

    const handleEdit=(id)=>{
        const toedittodo=todos.find((todo)=>todo.id===id);
        seteditTodo(id);
        setInput(toedittodo.value);
        
    }

    const handledelete=(id)=>{
        const newtodos=todos.filter((todo)=>todo.id!==id);
        setTodos(newtodos)
    }
    
    
        
 
    
  return (
      <>
         <div >
         <div style={{marginLeft:"600px"}}>
          <form onSubmit={handleSubmit}>
                  <input type="text" value={input} placeholder="Enter todos" onChange={handleChange}/>
              <br/>
              <button type ='submit'>{edittodo? "Edit" : "Add"}</button>
          </form>
          </div>
          <div style={{marginLeft:"600px"}}>
          <ul>
              {
                  todos.map((todo)=>
                      <div>
                      <li key={todo.id}>
                          {todo.value}
                          <button onClick={()=>handleEdit(todo.id)}>Edit</button>
                          <button onClick={()=>handledelete(todo.id)} >Delete</button>
                  </li>
                        
                      </div>
                            
                 
                    )
              }
            
              
          </ul>
          </div>
          </div>
      </>
  )

}
