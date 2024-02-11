// // function definition
// function sayMyname(){
// console.log("p");
// console.log("R");
// console.log("A");
// console.log("G");
// console.log("A");
// console.log("T");

// }

//function call

// sayMyname => only function name
// sayMyname()

// function add2numbers(num1 ,num2) // num1 & num2 are parameters
// {
//  console.log(num1+num2);   
// }

function add2numbers(num1 ,num2) // num1 & num2 are parameters
{
  let result  = num1 + num2
  return result 
  console.log("Pragat");  // this is not printed as it is below return
}
// add2numbers(7,5)//12 ; 5 and 7 ate arguments
// add2numbers(5 , "9") //59
// add2numbers(3 , null) // 3
const res = add2numbers(4,4)
// console.log(res); //undefined value is returned 



function loginusermessage(username)
{
    // if (username === undefined){
    //     console.log("please enter a user name");
    //     return
    // }
    if (!username){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}

// const a = loginusermessage("Pragat")
// console.log(a);

// console.log(loginusermessage());//undefined


// when we dont know no. of arguments are coming like a shopping card we dont know how many items will be added

function calculateCartPrice (...num1){
    return num1
}
//  console.log(calculateCartPrice(200 , 300 , 400 , 500));// This is returning an array
 // for one item 
 // now multiple operator we will apply ... (3dots befor our paramter this is same symbol as of spread ; Here this 3 dots are used as a REST operator)

 const Prices = calculateCartPrice(200 , 400 , 500)
 console.log(Prices[1]);// this is a way of accesing an array made using rest operator in js ; it is beneficial when we don't know no.of object but still want to get their sum
//  ********MAKING A OBJECT IN FUNCTION****
const user = {
    username: "Pragat",
    age:"20"
}
function anyobject(objects){
    console.log(`user name is ${objects.username} and age is ${objects.age}`);
}
// anyobject(user)
anyobject({
    username:"sam",
    age:"20"
})

//  Array in function

const newarray = [200 , 400 , 500 ,600 ,700]
function returnsecondvalue(getarray)
{
    return getarray[2] //500

}

console.log(returnsecondvalue(newarray));