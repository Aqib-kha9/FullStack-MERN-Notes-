const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat");
const methodOverride = require("method-override")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main().then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


app.get("/chats",async (req,res)=>{
    let chats = await chat.find();
    res.render("chats.ejs",{chats});
});

app.get("/chats/new", (req,res)=>{
    res.render("new.ejs");
});

//  Add new chat route

app.post("/chats",(req,res)=>{
    let {from,message, to} = req.body;
    let newChat = new chat({
        from:from,
        message:message,
        to:to,
        created_at: new Date(),
    });

    newChat.save().then(()=>{
        console.log("chats are saved in db");
    }).catch((err)=>{
        console.log(err);
    });

    res.redirect("/chats");

});


//edit route

app.get("/chats/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let chats = await chat.findById(id);
    res.render("edit.ejs", {chats});
});

app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let {message: newmessage} = req.body;

    let updatedChat = await chat.findByIdAndUpdate(id,{message: newmessage},{new: true}, {runValidators: true})
    res.redirect("/chats");
    console.log(updatedChat);
});

//distroy route


app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedchat = await chat.findByIdAndDelete(id);
    console.log(deletedchat);
    res.redirect("/chats");
});


app.get("/",(req,res)=>{
    res.send("root is working");
});

app.listen(8080,()=>{
    console.log("port is listen on 8080");
});