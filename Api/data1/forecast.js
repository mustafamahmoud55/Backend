const request=require("request")
const forecast=(latitued,longitued,callback)=>{
    const url="https://api.weatherapi.com/v1/current.json?key=4d70996d061b4d36b1d100910241308&q="+longitued+","+latitued+"&aqi=no"
    request({url:url,json:true},(error,response)=>{
        if(error)
        {
            callback("Can't reach to this Website",undefined)
        }
        else if(response.body.error)
        {
            callback(response.body.error.message,undefined)
        }
        else{
            callback(undefined,response.body.location.country+" it is "+response.body.current.condition.text)
        }
    })
    }
    module.exports=forecast