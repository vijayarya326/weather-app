var getUser =(id, callback) =>{
var user={
    id,
    name:"vikram"
}
setTimeout(()=>{
    callback(user);
}, 3000)

}


getUser(4, (user)=>{
    console.log(user);
});