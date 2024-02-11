//  now lets talk about singleton object ; these objects are created by our cnstructor
// const tinderUser = new Object() = > singleton object
const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "tinku"
tinderUser.isLoGGEDiN = false

// console.log(tinderUser);
// console.log(typeof tinderUser);

// *************    NESTING OF OBJECTS***********
// const regularuser = {
//     email: "Userregular@gmail.com",
//     userFULLname:{
//         fullname:{ 
//             name : "Pragat shukla",
//             class:"CSIOT_3A"
//     }
// // Nesting of objects 
//     }

// }

// console.log(regularuser.email);
// console.log(regularuser.userFULLname.fullname.class);
// console.log(regularuser.userFULLname.fullname?.rollno); // Here we have apply "?" ; it states that if value is there then  print otherwise not and output will be undefined
  


// ******COMBINING TWO objects*************

const obj1 = {1:"a" , 2: "b", 3:"c"}
const obj2 = {3:"d" , 4: "e", 5:"f"}
const obj4 = {6: "g", 7:"h" , 8:"8"}

// const obj3 = {obj1 , obj2}  => This is making a problem as it will create a object object which will have obj1 and obj2 separetly in it 
// console.log(obj3); => OUTPUT
// {
//     obj1: { '1': 'a', '2': 'b', '3': 'c' },
//     obj2: { '3': 'd', '4': 'e', '5': 'f' }
//   }  ;   


// tO resolve this we use another way 
//const obj3 = Object.assign(obj1,obj2) // { '1': 'a', '2': 'b', '3': 'd', '4': 'e', '5': 'f' }
// const obj3 = Object.assign({}, obj1,obj2 , obj4) // { '1': 'a', '2': 'b', '3': 'd', '4': 'e', '5': 'f' }
// //  here we have used "{}" to make sure that we have combined 2 objects for sure
   //  we use this syntax = > take a glass and leave it spread

   const obj3 = {...obj1,...obj2 ,...obj4}
//    {
//     '1': 'a',
//     '2': 'b',
//     '3': 'd',
//     '4': 'e',
//     '5': 'f',
//     '6': 'g',
//     '7': 'h',
//     '8': '8'
  //}  Output

// console.log(obj3); 

// ------------When we have to take value from ourt database  ---------------
      // in database we get values in form of arratys 

const user  = 
[
    {

    id:1,
    email:"Pragatshukla@gmail.com"
    },
    {

    id:2,
    email:"shukla@gmail.com"
    },
    {

    id:3,
    email:"Ps@gmail.com"
    },
    {

    id:4,
    email:"Pragatshukla@gmail.com"
    }


]
// user[1].email
// console.log(tinderUser);
// console.log(user[2].email);


console.log(Object.keys(tinderUser)); //Array data type in output 
console.log(Object.values(tinderUser)); //Array data type in output 
console.log(Object.entries(tinderUser)); //Array data type in output in this key and value ara in sepaerate array within a array

console.log(tinderUser.hasOwnProperty('name'));//True
console.log(tinderUser.hasOwnProperty('age')); //false
console.log(tinderUser.propertyIsEnumerable('name')); // check whether property is enumerable or not  ; OUTPUT => true





