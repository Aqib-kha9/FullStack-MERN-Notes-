import { useState } from "react"

export default function CommentsForm({addNewComment}){
    
    let [formData, setFormData] = useState({
        userName: "",
        remark: "",
        rating: ""
    });

    let InputChangeHandler = (event)=>{
        setFormData((curr)=>{
            return {...curr, [event.target.name] : event.target.value}
        })
    }

    let handelSubmit = (event) =>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
       
        setFormData({
            userName: "",
            remark: "",
            rating: ""
        })
    }

    return(
        <form onSubmit={handelSubmit}>
            <label htmlFor="userName">User Name</label>
            <input 
                type="text" 
                placeholder="userName"
                id="userName"
                value={formData.userName}
                name="userName"
                onChange={InputChangeHandler}

            />

            <br /><br />

            <label htmlFor="remark">Remark</label>
            <input 
                type="text" 
                placeholder="remark"
                id="remark"
                value={formData.remark}
                name="remark"
                onChange={InputChangeHandler}
            />

            <br /><br />

            <label htmlFor="rating">rating</label>
            <input 
                type="range"
                min="1"
                max="5"
                id="rating"
                value={formData.rating}
                name="rating"
                onChange={InputChangeHandler}
            />
            <br /><br />
            <button>submit</button>
        </form>
    )
}