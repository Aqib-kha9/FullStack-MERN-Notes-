const express = require("express");
const app = express();


// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.time);
//     next();
// })

app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token==="aqib"){
        next()
    }
    else{
        res.send("ACCES DENIED!");
    }
})

const checking = (req,res,next)=>{
    let {token} = req.query;
    if(token==="aqib"){
        next()
    }
    else{
        res.send("ACCES DENIED!");
    }
}


app.get("/api",checking,(req,res)=>{
    res.send("Data");
});

app.get("/",(req,res)=>{
    res.send("hi i am root");
    
})

app.listen(8080,()=>{
    console.log("server listen on 8080");
});