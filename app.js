const yargs  = require('yargs');
const geocode = require("./geocode/geocode");

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
        console.log(JSON.stringify(result, undefined, 1));
    }
});