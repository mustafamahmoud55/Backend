const request=require("request")
geocode=(adress,callback)=>
    {
    const geocodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/"+adress+".json?proximity=ip&access_token=pk.eyJ1IjoibXVzdGFmYTU1MDEiLCJhIjoiY2x6c2JnY2k2MXNxczJqcXdqendyaDZodCJ9.6K1jU4O09qEX4J0kAWC4Qw"
    request({url:geocodeUrl,json:true},(error,response)=>{
        if(error)
        {
            callback("unable to connect geocode service",undefined)
        }else if(response.body.message)
        {
            callback(response.body.message,undefined)
        }
        else if(response.body.features.length==0)
        {
             callback("can't reach to this location",undefined)
        }
        else
        {
            callback(undefined,{
                latitued:response.body.features[0].center[0],
                longitued:response.body.features[0].center[1]
            })
        }
    })
    }
    module.exports=geocode