const mongoose = require("mongoose");

main()
    .then(()=>{
        console.log("connection successful");
    }).catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon')
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true,
    },
    author:{
        type: String,
    },
    price:{
        type: Number,
        min: [1, " price is very low in amazon seller"],
    }
});

const book = mongoose.model("book",bookSchema);


book.findByIdAndUpdate("65ec3c7b63d17eec908c3bfe", {price: -546},{runValidators: true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});
// let book1 = new book({
//     title: "cool guy",
//     author: "Aqib",
//     price: 455,
// });



// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err.errors.price.properties.message);
// });