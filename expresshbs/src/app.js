const express=require("express")
const path=require("path")
const hbs =require("hbs")
const { title } = require("process")
const app=express()
const port =process.env.port||3000

app.set("view engine","hbs")
app.use(express.static(path.join(__dirname, '../public')));
const viewsD=path.join(__dirname,"../temp/views")
app.set("views",viewsD)

const viewsP=path.join(__dirname,"../temp/partials")
hbs.registerPartials(viewsP)

app.get("/",(req,res)=>{
    res.render("index",{
        title:"Home",
        body:"home page"
    })
})
app.get("/team",(req,res)=>{
    res.render("Team",{
        title:"Team",
        body:"Team Page",
        name:"Mustafa Mahmoud",
        age:23,
        city:"El-obour",
        img:"images/mustafa.jpg"
    })
})
app.get("/service",(req,res)=>{
    res.render("Service",{
        title:"Service",
        body:"Service Page",
        name:"Mustafa Mahmoud",
        age:23,
        city:"El-obour",
        img:"images/me.jpg"
    })
})

console.log(__dirname)
app.listen(port,()=>{
    console.log("Done")
})