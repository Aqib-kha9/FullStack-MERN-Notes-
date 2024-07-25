import { useState } from "react";

export default function Form(){

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    });

    let handelInputChange = (event) =>{
        setFormData((currData)=>{
            return{...currData , [event.target.name]: event.target.value}
        })
    }

    let handelSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        })
    }

    return(
        <div>

            <form onSubmit={handelSubmit}>
                <label htmlFor="name">Full Name</label>
                <input
                    type="text" 
                    placeholder="Enter name" 
                    value={formData.fullName} 
                    onChange={handelInputChange}
                    id="name"
                    name="fullName"
                />

                <br /><br />

                <label htmlFor="username">User Name</label>
                <input
                    type="text" 
                    placeholder="Enter user name" 
                    value={formData.userName} 
                    onChange={handelInputChange}
                    id="username"
                    name="userName"
                />
                <br /><br />

                <label htmlFor="password"> Password</label>
                <input
                    type="password" 
                    placeholder="Enter password" 
                    value={formData.password} 
                    onChange={handelInputChange}
                    id="password"
                    name="password"
                />
                <button>submit</button>
            </form>

        </div>
    )
     
}