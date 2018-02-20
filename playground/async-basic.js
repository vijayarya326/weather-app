console.log("Starting app");

setTimeout( () => {
    console.log("Inside timeout");
}, 2000);

setTimeout( () => {
    console.log("second Timeout");
} );

setTimeout( () => {
    console.log("3rd Timeout");
}, 5000 );

console.log("Somewhere in between");

setTimeout( () => {
    console.log("4th  Timeout");
}, 1000 );



console.log("Finishing App");