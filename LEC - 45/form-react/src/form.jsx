import { useState } from "react"

export default function Form(){

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    });
        

    let HandleInputChange = (event) =>{
        setFormData((currData)=>{
            return {...currData, [event.target.name]: event.target.value}

        })

    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        })
    }


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input 
                placeholder="name"
                type="text" 
                id="fullname"
                value={formData.fullName} 
                onChange={HandleInputChange}
                name="fullName"
            />
            <br /><br />
            <br /><br />

            <label htmlFor="userName">User Name</label>
            <input 
                placeholder="User Name"
                type="text" 
                id="userName"
                value={formData.userName} 
                onChange={HandleInputChange}
                name="userName"
            />

            <br /><br />
            <br /><br />

            <label htmlFor="password">Password</label>
            <input 
                placeholder="password"
                type="password" 
                id="password"
                value={formData.password} 
                onChange={HandleInputChange}
                name="password"
            />
            <button>submit</button>
            
        </form>
    )
}
