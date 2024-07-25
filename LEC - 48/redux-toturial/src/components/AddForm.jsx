import {useState} from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../features/todo/todoSlice"

export default function AddForm() {
    let [task, setTask] = useState("");
    const dispatch = useDispatch();

    let ChangeHandler = (event) =>{
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
    }


    return(
        <>
            <form onSubmit={ChangeHandler}>
                <input type="text" onChange={(e)=> setTask(e.target.value)}/>
                <button>Add</button>
            </form>
        </>
    )
}