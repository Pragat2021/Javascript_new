// **************************Control Flow*****************

// if  =>  we need to do comparison between two using if and else
// > , < , >= , <= , != , ===
// const qualtiy = function(num1)
// {
//     if (num1 % 2 ===0)
//     {
//         console.log("EVEN Number");
//     }
//     else
//     {
//         console.log("Odd number");
//     }
// }
// // console.log(qualtiy(4));// This will give undefined also in output
// qualtiy(8)// This doesn't give undefined .

// To remove this problem we should remove our console.log in our function and make use of return atatement i.e explicit return instead of implicit return by console.log
// Do not use var as "var" is global

// short  hand notation for if else
// const balance = 100
// if(balance>500) console.log("test")
// else console.log("No test");


// const bal =1000
// if (bal<500)
// {
//     console.log("less high");
// }
// else if (bal < 750)
// {
//     console.log("less than 750");
// }
// else if (bal <900)
// {
//     console.log("Less than 900");
// }
// else
// {
//     console.log("Highest ");
// }

// //  use of AND (&&)
// const userLoggedIn = true
// const debitcard = true
// const marks = 560
// if (userLoggedIn && debitcard && marks>75)
// {
//     console.log("ALLOWED");
// }
// else 
// {
//  console.log("Not Eligible");
// }


// Use of OR (||) 
const userLoggedIn = true
const debitcard = true
const marks = 56
if (userLoggedIn || debitcard || marks>75)
{
    console.log("ALLOWED");
}
else 
{
 console.log("Not Eligible");
}
