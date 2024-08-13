const forecast= require("../data1/forecast")
const geocode= require("../data1/geocode")
const yargs=require("yargs")
yargs.command({
    command:"weather",
    describe:"to get the weather in country",
    builder:{
        country:{
            describe:"the country want to have her weather",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        geocode(x.country,(error,data)=>{
            console.log("Error : ",error)
            console.log("Data : ",data)
            if(data){
            forecast(data.latitued,data.longitued,(error,data)=>{
                console.log("Error : ",error)
                console.log("Data : ",data)
            })
        }
        })
    }
})

yargs.parse()