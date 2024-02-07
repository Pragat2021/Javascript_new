//we will study in a invesigation way
const accountID =144553//varible and name should be understandable, assigned in memory and memory value is locked
let accountEmail="pragatshukla@gmail.com"//assigned in memory
var accountPassword="12345"
accountCity="Jaipur"
accountEmail="p@gmail.com"
accountPassword="54321"
//accountID=2 this statement is invalid as account id is const 
accountCity="Kanpur"
let accountState ;

//no hard rule to use ";" in javascript.
// reserve memory without let or const
//we do not use var much 
//{}->this is scope initially js not have scope but now has
// so we use let and const forget about var


/*
another way of declaring  multiple line comments
*/
console.log(accountID); 
//we can use this to print all this data at a same time this is table method of log
// log([all the printing variables])
console.log([accountID,accountEmail,accountPassword,accountCity , accountState]);


///OUTPUT  [ 144553, 'p@gmail.com', '54321', 'Kanpur', undefined ]