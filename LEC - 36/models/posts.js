const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(()=>{console.log("connection succsessful")}).catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    post: String,
    likes: Number,
});

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

const addPosts = async ()=>{
    // let user1 = new User({
    //     username: "adam",
    //     email: "adam@gmail.com",
    // });

    let user = await User.findOne({username: "adam"});

    let post2 = new Post({
        post: "bye bye!",
        likes: 79,
    });

    post2.user = user;

    await post2.save();

}

addPosts();
