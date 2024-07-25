const express = require("express");
const app = express();
const port = 8080;

app.listen(port,()=>{
    console.log(`app listning...${port}!`)
})

app.get("/register",(req,res)=>{
    let {username, password} = req.query;
    res.send(`welcom to ${username} and your password ${password}`);
})

app.post("/register",(req,res)=>{
    res.send("standard POST response");
})