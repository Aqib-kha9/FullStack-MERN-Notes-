const mongoose = require("mongoose");

main()
    .then(()=>{
        console.log("connected successful");
    })
    .catch(err=>console.log(err));


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);


User.findOneAndDelete({name:"clus"}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

// User.findByIdAndUpdate("65e9ff8e2f99bf5e14834ba6",{age:70},{new: true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });





// User.updateMany({age:{$gt:30}},{age:80}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{console.log(err)});




// User.findById("65e9ff8e2f99bf5e14834ba7")
//     .then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     })

// User.insertMany([
//     {name:"adam", email: "adam@gmail.com", age: 30},
//     {name:"eve", email: "eve@gmail.com", age: 58},
//     {name:"clus", email: "clus@gmail.com", age: 45},
// ]).then((res)=>{
//     console.log(res);
// });


// const user1 = new User({
//     name: "aqib",
//     email: "aquib@gmail.com",
//     age: 25
// });

// user1
//     .save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })