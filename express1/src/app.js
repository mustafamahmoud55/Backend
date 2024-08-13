const express=require("express")
const app=express()
const path=require("path")
port=process.env.PORT||3000

const x=path.join(__dirname,'../public')
app.use(express.static(x))

app.get("/",(req,res)=>{
    res.send("HELLLLLLO WorLLLLLLLLLd")
    })
app.get("/team",(req,res)=>{
    res.send("Team work")
})
app.get("/data1",(req,res)=>{
    res.send("Data 1")
})
app.get("/data2",(req,res)=>{
    res.send("Data 2")
})
    
app.listen(port ,()=>{
  console.log(`Port are running ${port}`)
})