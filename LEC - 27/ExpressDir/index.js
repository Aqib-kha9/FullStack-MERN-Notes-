const express = require('express');
const app = express();
const port= 8080;
app.listen(port, ()=>{
    console.log(`server is running ${port}`);
});



app.get("/",(req,res)=>{
    res.send("hello i amm");
});

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(`Welcome My Friend ${username} ${id}`);
});

// app.post("/",(req,res)=>{
//     res.send("you send post request and connected root path");
// });

// app.get("*",(req,res)=>{
//     res.send("you write wrong path error");
// });

// app.use((req, res)=>{
//     console.log("Request Recieved");
//     let data = "<h1>hello</h1> <ul><li>orange</li><li>orange</li></ul>"
//     res.send(data);
// });