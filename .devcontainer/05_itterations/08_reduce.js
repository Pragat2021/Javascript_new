// // reduce is used when we have to add all the values together
// curent value = present value in Array
// accumulator is empty variable in which we give value given us userbooks
const mynums = [1 , 2 , 3 , 4 , 5]


// This won't print accumulator and current value as it is outside the scope of reduce

// const total = mynums.reduce((nums,mynums)=> nums+mynums , 0)
// console.log(`accumulator value is ${nums} and current value is ${mynums}`) ;
// console.log(total); // =>"0"    output is zero


// This works as we are using reduce and applying the console log for accumulator and current value inside the scope of reduce and moreover we r using a arrow function
// const total = mynums.reduce((nums,mynums)=> {
// console.log(`accumulator value is ${nums} and current value is ${mynums}`) ;
// return nums+mynums
// },0)
// console.log(total); // =>"0"    output is zero



// const total = mynums.reduce(function(acc , currval){
//     console.log(`accumulator value is ${acc} and curent value is ${currval}`);
//     return acc+currval
// },0)  //here "0" is initial value
// console.log(total);


