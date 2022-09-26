import {useEffect, useState} from "react";

import {todoService} from "../../services";

import Todo from "../todo/Todo";

function Todos() {
let [todos,setTodos] = useState([])

  useEffect(() => {
    todoService.getAll().then(({data})=>setTodos(data))
  },[])

  return (
    <div>
      <h3>Todos</h3>
      {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
    </div>
  );
}

export default Todos;