const mongoose = require("mongoose");
const chat = require("./models/chat");

main().then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [
    {
        from: "mark",
        to: "eve",
        message: "if you know it",
        created_at: new Date(),
    },
    {
        from: "eliza",
        to: "micky",
        message: "can you learn that",
        created_at: new Date(),
    },
    {
        from: "peter",
        to: "adam",
        message: "that is not zombie it is potty",
        created_at: new Date(),
    },
    {
        from: "eva",
        to: "jenji",
        message: "hi jenji how are you ",
        created_at: new Date(),
    },
    {
        from: "nora",
        to: "met",
        message: "hey anyone calling you",
        created_at: new Date(),
    },
    {
        from: "anshu",
        to: "zaid",
        message: "can you eat this dilicious food",
        created_at: new Date(),
    },
    {
        from: "akash",
        to: "ojha",
        message: "hi ojhe if you are here!",
        created_at: new Date(),
    },
    {
        from: "asif",
        to: "waheed",
        message: "let's go to the tupri to smoking sutta",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "arbaz",
        message: "why are you doing this it is not good",
        created_at: new Date(),
    }
];

chat.insertMany(allChats);

