const  request = require('request');
const keyString  = "AIzaSyANhKnVrENZiltmwVZRNcNy0lpRgxhOe1E";

var geoCodeAddress= (pin)=>{
    return new Promise((resolve, reject)=>{
        let endcodedAddress =  encodeURIComponent(pin);

            request('https://maps.googleapis.com/maps/api/geocode/json?address='+endcodedAddress+'&key='+keyString, {json:true}, (error, response, body)=>{

        if(error){
            reject("Unable to connect to google API");
        }else if(body.status =="OK") {
            resolve({"Formatted Address" : body.results[0].formatted_address,
                "Latitude":body.results[0].geometry.location.lat,
                "Longitude" : body.results[0].geometry.location.lng});
        }else if(body.status =="ZERO_RESULTS"){
            reject("Unable to find the address");
        }
    });
    })

};

geoCodeAddress('07097').then((data)=>{
    console.log(JSON.stringify(data, undefined, 2));
}).catch((errorMessage)=>{
    console.log(errorMessage);
})
