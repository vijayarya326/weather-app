const yargs  = require('yargs');
const geocode = require("./geocode/geocode");
const tempApi = require('./weatherApi/weatherApi');
const args = yargs.options({
    a:{
        demand: true,
        alias : "address",
        describe: "Address to fetch weather",
        string : true,
    }
}).help().argv;


geocode.geocodeAddress(args.a, (error, result)=>{
    if(error){
        console.log(error);
    }else{
            tempApi.getTempreture(result.Latitude, result.Longitude, (error, result1)=>{
                if(error){
                    console.log(error)
                }else{
                    console.log(JSON.stringify(result, undefined, 2));
                    console.log(JSON.stringify(result1, undefined, 2));
                }
            })
    }
});