// data are of 2 types Primitive and non Primitive ( reference type)
 
// Primitive:These are always call by value changes in copy only
 // string , number , boolean , null , undefined , Symbol -> unique the value we use symbol , BigInt 
 // we never  give a data type to our javascript
            //***** JAVASCRIPT IS DYNAMICALLY TYPED OR STATICALLY TYPED ?? */  
            //=> ANSWER :  JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
             
 const score = false
 const value = 100.23
 const isloggedin = true
 const outsidetemp = null
 let userEmail ;//its value id undefined = > whether u write undefined or not it is undefined
 // How to define symbol 
  const id = Symbol('123')
  const anotherid =  Symbol('123')

  console.log(id === anotherid); //false
  //const bignumber = 35657748416892n


//**********************Non premitive or Reference type  *************************
// there reference can be directly given to memory

// arrays , objects , functions 
  const hero = [ "shaktiman" , "nagraj" , "doga"] //arrays
   // now objects they are inside curly braces and in key value pir format
  let myobj =  {
    // we can save in a variable also
        name: "Pragat",
        age : 22 ,
   }
   // let's see a variable method of defining a function
    const myFunction = function (){
        console.log("Hello World!");
    }
    // to find datatype of a variable
    console.log(typeof myFunction);//Function
    console.log(typeof outsidetemp); // object => null is a object type datatype
    console.log(typeof myobj); // object
    



