// const useremail = "Pragat@gmail.com"

// if (useremail) console.log("Yes its valid email");
// else console.log("Not a vaid email");
// //  output is "yes its a valid email " thus means if any string i sdeclared it is asseumed as correct while if it is empty of undefined then only false  ; 


// // here are some falsy values = >false , 0 , -0 , BigInt 0n ,  "" , null , undefined , NaN (NOT A NUMBER) 
// //  Here are some truthy values = > true , 1 , "0"( => is truthy as it is insode the string) , "false"  , [] , {} , function(){} (empty function is alseo truthy)



// // to check array 

// const array = [ 1 , 3 , 4 , 5]
// if (array.length > 5 )
// {
//     console.log("Yes its valid");
// }
// else if (array.length === 0 )
// {
//     console.log("Empty array");
// }
// else
// {
//     console.log("Go back");
// }




//  ***To check objects+***
const obj1 = {}
if (Object.keys(obj1).length === 0)
{
    console.log("Hello world !");
}


// Nullish Coalescing Opertor (??): null undefined
        // : This is made onto check null or undefined if ther is  a null or undefined then it wil return the first value coming after null or undefined
// let val1 ;
// val1 = 5 ?? 10
// val2 = null ?? 10
// val3 = undefined ?? 18 ?? 20
// console.log(val1);//5
// console.log(val2);//10
// console.log(val3);//15



// ***Terniary Operator****

// condition ? true : false

const IceTeaPrice = 100
IceTeaPrice <= 80 ? console.log("Less Than 80 ") : console.log("More than 80");



//  Summary ...........
// we use control statements to make a flow control in our program 



