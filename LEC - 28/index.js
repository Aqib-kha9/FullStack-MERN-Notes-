const express = require("express");
const app = express();
const path = require("path");
const port= 8080;

app.set("views",path.join(__dirname,"/views"))
app.listen(port, ()=>{
    console.log(`server is running ${port}`);

});


app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public")));

// app.get("/ig/:username",(req,res)=>{
//    let {username} = req.params;
//    let arr = ["adam","bob","steve","nal"];
//    res.render("instagram",{username,arr})
// })

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    let instaData = require("./data.json");
    let data = instaData[username];
    if(data){
        res.render("instagram",{data})
    }else{
        res.render("error");
    }
    
})

app.get("/rollDice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceVal});
})

// let rollDice = Math.floor(Math.random() * 6)+1;
// console.log(rollDice);

