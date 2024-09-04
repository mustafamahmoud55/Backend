const request=require("request")

const forecast=(latatitude,longitiude,callback)=>{
url="https://api.weatherapi.com/v1/current.json?key=4d70996d061b4d36b1d100910241308&q="+latatitude+","+longitiude+"&aqi=no"
request({url,json:true},(error,response)=>{
    if(error){
        callback("Url is invalid",undefined)
    }else if(response.body.error){
        callback(response.body.error.message,undefined)
    }else{
        callback(undefined,response.body.current.condition.text)
    }
    
})

}

module.exports=forecast