import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){

    let [todos, setTodos] = useState([{task:"sample task", id:uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos([...todos, {task: newTodo, id: uuidv4(), isDone: false }]);
        setNewTodo("");
    }

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id)=>{
        setTodos((prevTodo)=>todos.filter((prevTodo) => prevTodo.id != id));
    }

    let markDoneAll = ()=>{
        setTodos((prevTodo)=>
            prevTodo.map((todo)=>{
                return{
                    ...todo,
                    isDone: true,
                }
            }))
    }

    let upperCaseOne = (id)=>{
        setTodos((prevTodo)=>
            prevTodo.map((todo)=>{
                if(todo.id == id){
                    return{
                        ...todo,
                        task: todo.task.toUpperCase(),
                    }
                }else{
                    return todo;
                }
                
            }))
    }

    let markAsDone = (id)=>{
        setTodos((prevTodo)=>
            prevTodo.map((todo)=>{
                if(todo.id == id){
                    return{
                        ...todo,
                        isDone: true,
                    }
                }else{
                    return todo;
                }
                
            }))
    }

    

    return (
        <div>
            <input type="text"  placeholder="add a task" value={newTodo} onChange={updateTodoValue}/><br />
            <button onClick={addNewTask}>add task</button>

            <br /><br /><br /><br />

            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecoration:"line-through"} : {}}>{todo.task}</span>
                            &nbsp; &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                            <button onClick={()=>upperCaseOne(todo.id)}>upperCase One</button>
                            <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                        </li> 
                    ))
                }
            </ul>
            <button onClick={markDoneAll}>Mark Done All</button>
        </div>
    )
}