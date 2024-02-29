// fetch('http://somthjing.com').then().catch().finally()  => Used now a days
 //promise is made ;  it takes actually a call back inside it
// Blue bird library 
const promiseone = new  Promise(function(resolve , reject)
{ //do async Task
    // DB Calls  , cryptography , network calls
    setTimeout(function()
    {
        console.log('async task done');
    }, 1000)
    resolve()

})

// consumption of promise  use then 
promiseone.then(function()
{
    console.log("Promised Consumed");
})

new Promise(function(resolve , reject){
    setTimeout(function()
    {
        console.log("Asy2 done");
        resolve()
    })
}).then(function(resolve , reject)
{
    console.log("Async 2 Resolved");
})

const promisethree = new Promise (function(resolve ,reject ){
    setTimeout(function(){
        resolve({username : "pragat" , email : "P@gmail.com"
    })
    },1000)
})
promisethree.then(function(user)
{
console.log(user);
})

const promisefour = new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        let error = true
        if(!error)
        {
            resolve({username : "Pragat" , password : "123"})
        }
        else 
        {
            reject('Error something went wrong')
        }
    },1000)
})
promisefour.then ((user) => {

    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
})