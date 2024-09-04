const request=require("request")

const geocode=(address,callback)=>{
url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?proximity=ip&access_token=pk.eyJ1IjoibXVzdGFmYTU1MDEiLCJhIjoiY2x6c2JnY2k2MXNxczJqcXdqendyaDZodCJ9.6K1jU4O09qEX4J0kAWC4Qw"
request({url,json:true},(error,response)=>{
    if(error){
        callback("Url is invalid",undefined)
    }else if(response.body.message){
        callback(response.body.message,undefined)
        }
    else if(response.body.features.length==0){
        callback("Please Enter a valid address",undefined)
    }else{
        callback(undefined,{
            latatitude:response.body.features[0].center[0],
            longitiude:response.body.features[0].center[1]
        })
    }
})

}

module.exports=geocode