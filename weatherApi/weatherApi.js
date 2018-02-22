const request = require('request');
const weatherApiUrl ="https://api.darksky.net/forecast/";
const weatherAPIKey ="056f05031e140099463e3dc043a1ef63";


var getTempreture = (lat, long, callback) => {
        request(weatherApiUrl+weatherAPIKey+"/"+lat+","+long,{json:true},(error, response, body)=>{
            if(error){
                callback("Error Connecting to Weather API")
            }else if(response.statusCode != 200){
                callback("Error Code : "+response.statusCode);
            }else{
                callback(undefined , {"Timezone": body.timezone, "Tempreture": body.currently.temperature})
            }
    });
}


module.exports= {
    getTempreture
}