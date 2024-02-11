// Array 
// always write array in brackets
// In Javascript arrays size  can be be changed its not like that u wont be able to change once u declared
// array elements  cannot  be accesed using a arbitary  strings as indexes
// indexing starts in zero
const myArr = [0 ,1 ,2, 3, 4 , 5  ]
// console.log(myArr[0]);
// console.log(myArr["one"]); => This is  not valid in javascript
//array create shallow copies => copy whose property share same reference point i.e changes made are reflected back in original array also
// No deep copy =>  do not share common refernce point means changes made cannot be reflected in same reference point
const myhero = ["Shaktiman" , "Doremon"]
const myArr2 = new Array (1,2,3,4)
// console.log(myArr2[1]);


//******Array Methods********* */

// myArr.push(6) // add values in our array
// myArr.push(7) // add values in our array
// console.log(myArr);
// myArr.pop()// removes the last element  of the array
// console.log(myArr);

// myArr.unshift(9)// insert the value at the begining of the array ; however this is not good as full array need to be shifted but this is not a good practice for a good coder
// console.log(myArr);
// myArr.shift(9)// delete the element at beginning index
// console.log("After shift");
// console.log(myArr);

// console.log(myArr.includes(9)); // we can ask question in array give answer in True or False.
// console.log(myArr.indexOf(3));// tells u index of value
 

// const newArr = myArr.join()
// // Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(newArr);
// console.log(typeof newArr);



//***Slice and splice****/

console.log("A",myArr);

const myn1 = myArr.slice(1,3)// 1st and 2nd is given out
console.log(myn1);
console.log("B", myArr); // original array pruinted with name b


const myn2 = myArr.splice(1,3)// 1st and 2nd  and 3rd also is included
console.log("C", myArr); // original array pruinted with name b
console.log(myn2);

// slice doesnt change in original copy it just make a copy and make changes  whereas in splice original array gets maupulated or changed it doesnot make any changes in original array but slice does
