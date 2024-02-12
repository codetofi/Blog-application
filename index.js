import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs",{blogs:blog});
})
let blog = [];
let id = 1001

app.post("/create",(req,res)=>{
   
 let myblog = {Title : req.body["Title"], Content : req.body["content"],Imgref : req.body["Image"],ID : id}
   blog.push(myblog);
   id++;
   console.log(myblog.ID);
   res.redirect('/home');
});
app.get("/make",(req,res)=>{
    res.render("make.ejs");
})
app.get("/home",(req,res)=>{
    res.render("index.ejs",{blogs:blog});
})

app.get("/header",(req,res)=>{
    res.render("header.ejs");
})
app.get("/delete",(req,res)=>{
    res.render("delete.ejs")
})
app.post("/delete",(req,res)=>{
    console.log(req.body["id"])
})
app.listen(3000,()=>{
console.log("listennig");
})