const express =require("express")
const path=require("path")
const forecast=require("./tools/forecast")
const geocode=require("./tools/geocode")
const app=express()
const port=process.env.port||3000

app.use(express.static(path.join(__dirname,"../public")))

app.set("view engine","hbs")

app.get("/products",(req,res)=>{
    if(!req.query.Product)
        {
            res.render("products",{
                Error:"Can't reach to this product"
            })
        }
        else{
            res.render("products",{
                title:"Products",
                Product:req.query.Product                
            })
        }
})
app.get("/weather",(req,res)=>{
    if(!req.query.country){
        res.send({
            Error:"Can't Reach to this address"
        })
        
    }else{
        geocode(req.query.country,(error,data)=>{
        if(error){
            res.send({
                error
              })
        }else{
            forecast(data.latatitude,data.longitiude,(error,data)=>{
                if(error)
                {
                    res.send({
                       error
                     })
                }
                else{
                res.send({
                    City:req.query.country,
                    forecast:data
                 })}
            })
            
        }

        })

        
           
    }
})
app.listen(port,()=>{
    console.log("Done")
    
})