const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Delta_trans",
  password: "2300045",
});
let createRandomUser = ()=>{
  return [ 
    faker.string.uuid(),
  ];
}
// faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password(),

//HOME ROUTE

app.get("/",(req,res)=>{
  let q = `SELECT count(*) FROM userf`;
  try {
    connection.query(q, (err, result)=>{
      if (err) throw err;
      let total = (result[0] ["count(*)"]);
      res.render("home.ejs",{total});
    });
      
  } catch (err) {
      res.send("some error in DB");
    }
  // connection.end();
});

//USERS ROUTE

app.get("/user",(req,res)=>{
  let q = `SELECT * FROM userf`;
  try {
    connection.query(q,(err,users)=>{
      if(err)throw err;
      res.render("showusers.ejs",{users});
    })
  } catch (err) {
    res.send("some error in DB");
  }
});

//Edit route

app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM userf WHERE id = '${id}'`;
  try {
    connection.query(q,(err,result)=>{
      if(err)throw err;
      let user = result[0];
      res.render("edit.ejs",{user});
    })
  } catch (err) {
    res.send("some error in DB");
  }
})


//Update (DB) Route


app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM userf WHERE id = '${id}'`;
  let {password :formpass, username: newUser } = req.body;
  try {
    connection.query(q,(err,result)=>{
      if(err)throw err;
      let user = result[0];
      if(formpass!=user.password){
        res.send("wrong pass");
      }else{
        let q2 = `UPDATE userf SET user_name='${newUser}' WHERE id ='${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect("/user");
        })

      }
    })
  } catch (err) {
    res.send("some error in DB");
  }
})


// Add New User Route

app.get("/user/newuser",(req,res)=>{
  res.render("adduser.ejs");
});

app.post("/user/adddb",(req,res)=>{
  let {user_name,email,password} = req.body;
  let id = createRandomUser();
  let q = `INSERT INTO userf (id, user_name, email, password) VALUES ('${id}','${user_name}','${email}','${password}')`;
  try {
    connection.query(q,(err,result)=>{
      if(err)throw err;
      res.redirect("/user");
    })
  } catch (error) {
    console.log("some error in DB");
  }
});


//DELETE ROUTE

app.get("/user/:id",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM userf WHERE id = '${id}'`;
  try {
    connection.query(q,(err,result)=>{
      if(err)throw err;
      let user = result[0];
      res.render("delete.ejs",{user});
    })
  } catch (err) {
    res.send("some error in DB");
  }
})



//DELETE 
app.delete("/user/:id/delete",(req,res)=>{
  let {id} = req.params;
  let {email:formemail,password:formpass}=req.body;
  let q = `SELECT * FROM userf WHERE id = '${id}'`;
  try {
    connection.query(q,(err,result)=>{
      if(err)throw err;
      let user = result[0];
      console.log(user);
      if(formemail!=user.email & formpass!=user.password){
        res.send("enter wrong details");
      }else{
        let q2 = `DELETE FROM userf WHERE id='${id}'`;
        connection.query(q2,(err,result)=>{
          res.redirect("/user");
        });
      }
    })
  } catch (err) {
    res.send("some error in DB");
  }
});

app.listen(port,()=>{
  console.log(`port is listning ${port}`);
});


