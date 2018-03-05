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




geocode.geocodeAddressPromise(args.a);