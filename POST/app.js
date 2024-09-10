const express=require('express')
require('./db/mongoose')
const app=express()

const port=process.env.port||3000

const userRotuer=require('./routers/user')


app.use(express.json())


app.use(userRotuer)



app.listen(port,()=>{ 
    console.log('All Process Done')
})