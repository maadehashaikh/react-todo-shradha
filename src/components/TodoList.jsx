import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
function TodoList() {
  let [todos , setTodos] = useState([{task:"Sample task" , id:uuidv4()}]);
  let [newTodo,setNewtodo] = useState("");
  let addNewTask = () => { 
  setTodos((prevTodos)=> {
    return [...prevTodos , {task : newTodo , id:uuidv4()}]
  });
  setNewtodo("");
  } 
  let updateTodoItem = (event) => {
      setNewtodo(event.target.value);
  }
  const deleteTodo = (id) => {
    setNewtodo((prevTodos) => {
      todos.filter((prevTodos) => prevTodos.id != id)
  });
  };
  return (
    <>
    <input type="text" placeholder='Add your todo item'value={newTodo}  onChange={updateTodoItem}/>
    <button onClick={addNewTask}>Add Task</button>
    <h4>Todo List :</h4>
    <ul>
      {
        todos.map((todo) => (
          
          <li key={todo.id}> <span>{todo.task}</span> 
          &nbsp;
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
    </ul>
    </>
  )
}
export default TodoList