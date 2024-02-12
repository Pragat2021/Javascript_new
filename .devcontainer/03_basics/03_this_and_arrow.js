const user = {
    name:"Pragat",
    class:"CSIOT3",
    age:"20",
    welcomemessage :  function(){
        // console.log("Hello I am Pragat");
        // console.log(`${this.name}, welcome to website ,`);
        // console.log(this);
    }// this is used to access current context
}

// user.welcomemessage()
// user.name = "Prakhar"
// user.welcomemessage()

// console.log(this); //Here its empty becoz nothing is there in global
// in browser window is global object so in browser value of this is window in browser


// function games()
// {
//     let gname = "Kabbadii"
//     console.log(this.gname);  // => This gives undefined

// }

// games()


// const hobby = function ()
// {
//     let gname = "Kabbadii"
//     console.log(this.gname);  // => This gives undefined
//=> THIS IS also undefined

// }

// hobby()


// *********Arrow functions  *************
// const hobby = () => { // arrow function intro .........
//     let gname ="kabbadi"
//     console.log(this); // {} same output as it was without arrow functions . 
// }
// hobby()

/*write return if u are using paranthesis {} otherwise no need to write just simply put arrow function*/



// This is main arrow 
// const addtwonums = (num1 , num2) => {
//     return num1+num2
// }

// console.log(addtwonums(3,4));


// This is implicit return =>below no use of return keyword
// explicit return => use of return statement 

// const addtwonums = (num1 , num2) => num1+num2
// console.log(addtwonums(3,4));



// const addtwonums = (num1 , num2) => (num1+num2)

// console.log(addtwonums(3,5));

// *******Returning an object***
// const addtwonums = (num1,num2 ) => ({username:"Pragat"})
// // console.log(addtwonums(4,8));
// addtwonums.username
// // console.log(addtwonums.username); // undefined



// getting an aarray 
// const myarray = [ 2,5,7,8]
// myarray.forEach(function(){
//     console.log("Hello world");
// })
//OUTPUT
// Hello world
// Hello world
// Hello world
// Hello world


//.............Now sam thing using arrow function.........
// const myarray = [10,2,3,5,9,9,8,1,55,7];
// while(true)
// {
//     myarray.forEach(() => {
//     console.log("Hello world");
// });
// }