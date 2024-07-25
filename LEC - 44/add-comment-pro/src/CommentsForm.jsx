import {useState} from "react";

export default function CommentsForm(){

    let [formData, setFormData] = useState ({
        userName: "",
        remark: "",
        rating: 5
    });

    let handelInputChange = (event) =>{
        setFormData((currData)=>{
            return{...currData, [event.target.name] : event.target.value}
        })
    }

    let handelDefault = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            userName: "",
            remark: "",
            rating: 5
        })
    }

    return(
        <div>
            <h4>Comments</h4>

            <form  onSubmit={handelDefault}>
                <input 
                    type="text" 
                    placeholder="Enter UserName"  
                    value={formData.userName}
                    onChange={handelInputChange}
                    name="userName"
                />

                <br /><br />

                <textarea 
                    placeholder="Write Remarks" 
                    value={formData.remark} 
                    id=""
                    onChange={handelInputChange}
                    name="remark"
                ></textarea>

                <br /><br />

                <input 
                    type="number" 
                    value={formData.rating} 
                    onChange={handelInputChange}
                    name="rating"
                    value-min="5"
                    aria-valuemax={5}
                />

                <br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    )    
}