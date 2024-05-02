import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
const TodoList = () => {
  let [todos ,setTodos] = useState([{task:'sample-task' ,id:uuidv4() , isdone:false}]); 
  //=> simple array bananay ki bajay we'll make array of objects  
  let [inputTodo , setInputTodo] = useState('');
  const addTask = () => {
   setTodos((prevtodo) => {
    return [...prevtodo,{task:inputTodo , id:uuidv4()}]
  });
   setInputTodo ("");
  }
  const newTodoAdd = (event) => {
    setInputTodo(event.target.value);
  }
  const deleteTodo = (id) => {
    setTodos((prevtodo) => prevtodo.filter((todo) => todo.id != id)); 
    // filter method hamesha aik new copy return karta h or ab yeh us elemnet ko filter kardy ga jo hmy nh chhaiyay h 
  }
  
  const Uppercase = (id) => {
    setTodos((prevtodos) => prevtodos.map((todo) => {
        if(todo.id == id){
          return {
            ...todo , task: todo.task.toUpperCase () 
          };
        }
        else{
          return todo;
        }
      })
    );
  }

  const markasdone = (id) => {
    setTodos((prevtodos) => prevtodos.map((todo) => {
        if(todo.id == id){
          return {...todo , isdone:true};
        }
        else{
          return todo;
        }
      })
    );
  }

  const UpperCaseAll = () => {
    setTodos((prevtodo) => 
     prevtodo.map ((todo) =>{
      return{
        ...todo , task:todo.task.toUpperCase(),
      }
    })
  );
  }

  const MarkAsDoneAll = () => {
    setTodos((prevtodo) => 
     prevtodo.map ((todo) =>{
      return{
        ...todo , isdone :true,
      }
    })
  );
  }

  return (
    <div>
      <input type="text" placeholder='add your task here' value={inputTodo} onChange={newTodoAdd}/><br />
      <button onClick={addTask}>Add Task </button><br />
      <hr />
      <h3>TO DO LIST !!! </h3>
      <ul>
        {  
            todos.map((todo)=> (
            <li key={todo.id}>
            <span style={todo.isdone ?{ textDecoration:'line-through'} :{} }> {todo.task} </span> 
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button> 
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => Uppercase(todo.id)}>UpperCase</button> 
            <button onClick={() => markasdone(todo.id , todo.task)}>Mark As Done</button>
            </li>
          ))
          }
      </ul>
      <button onClick={UpperCaseAll}>UpperCaseAll</button>
      <button onClick={MarkAsDoneAll}>MarkAsDoneAll</button>
    </div>
  )
}

export default TodoList


// Todos ko hum arrays ki form mai store karwana chahty hain because jo hmara todos variable h us mai jab bh change aay UI mai bh changes aa jay as such kay us variable mai changes detect hon or li mai bh woh reflect ho jay is kay liyay hm usko state variable mai store karain gay . we know very well that array kay har element ko print karwany kay liyay we always use map function that loop through all the array and print each and every item , basically what we have done is that ham add button ko aik functionality dayty hain kay jaisy he button click ho jo bh element is in the input filed woh ja kar todos array mai add ho jay , or input value ko track karny kay liyay what we have to do is kay hm aik or stste variable ko use karty hain jo current stste ko input filed ki check kary ga , so ho kia rha h we have 2 state variables and purpose is that kay jaisy he input ki value change ho jay to hamari jo inputTodo h woh bh change ho jay and jab add button p click ho to inputTodo ki value jo h woh add ho jay todos kay array mai .ab hm ny aik functiontionality add ki h apny project and it is that kay hamari input field mai jab bh changes hongy what we have to do is that us ko hm event.target say dekhain gay or us value ko add button click hony p array mai insert kardain gay ab hmny kia kia jo hmara inputtodo varibale tha woh set ho kar jo bh input value mai changes aay hain us mai dikh jay ga like setinputtodo kay andar jo bh input kay event mai taget ki value hogi hogi woh aa jay ge . 
