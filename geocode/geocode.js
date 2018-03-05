const  request = require('request');
const keyString  = "AIzaSyANhKnVrENZiltmwVZRNcNy0lpRgxhOe1E";
const axios = require('axios');

var geocodeAddress = (address, callback) =>{
    let endcodedAddress =  encodeURIComponent(address);

    request('https://maps.googleapis.com/maps/api/geocode/json?address='+endcodedAddress+'&key='+keyString, {json:true}, (error, response, body)=>{
//console.log(JSON.stringify(body, undefined, 1));
        if(error){
            callback("Unable to connect to google API");
        }else if(body.status =="OK") {
            callback(undefined, {"Formatted Address" : body.results[0].formatted_address,
                "Latitude":body.results[0].geometry.location.lat,
                "Longitude" : body.results[0].geometry.location.lng});
        }else if(body.status =="ZERO_RESULTS"){
            callback("Unable to find the address");
        }
    });

}

var geocodeAddressPromise =(address) =>{
    let endcodedAddress =  encodeURIComponent(address);
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+endcodedAddress+'&key='+keyString)
        .then((response )=>{
            console.log(response.data);
        })
}

module.exports = {
    geocodeAddress,
    geocodeAddressPromise,
};