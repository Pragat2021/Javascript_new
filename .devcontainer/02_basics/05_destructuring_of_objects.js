// // console.log("DESTRUCTURING OF OBJECTS");

// const obj1 = {1:"a" , 2: "b", 3:"c"}
// const obj2 = {3:"d" , 4: "e", 5:"f"}
// const obj4 = {6: "g", 7:"h" , 8:"8"}
// const obj3 = {...obj1,...obj2 ,...obj4}
// const user  = 
// [
//     {

//     id:1,
//     email:"Pragatshukla@gmail.com"
//     },
//     {

//     id:2,
//     email:"shukla@gmail.com"
//     },
//     {

//     id:3,
//     email:"Ps@gmail.com"
//     },
//     {

//     id:4,
//     email:"Pragatshukla@gmail.com"
//     }


// ]

const course = {
    course: "Js by Pks" , 
    fee :"2000" , 
    instructor: "Pragat Shukla"
}


const {instructor} = course  // another way of geeting value this is destructuring 
console.log(instructor);

// Lets have a example in relation with reract in which to access everything we use props.(method)
// const navbar = ({companyname}) => {

// }

// This is destructuring
// navbar(companyname = "Pragat")


// Whenever hume apna kaam dusre ke sir pr dalna hoooo api use hota haiiii
// api are nothing just values from backend ; these values are in form of Json

// {
//     "name" : "Pragat",
//     "coursename":"Js by pragat",
//    " fees": "Free"
// }  = > this is not a object its a string  ; here both key and value both are strings
// In object we have values as string only not their key
//  this is actuallly a form in which we get data in api

const objects2 = {
    name : "Pragat",
    coursename :"Javascript",
    fees :"free"
}

const {name} =  objects2
console.log(name); // accesing objecr name

// sometime we get information in  api in array format


    //  api are accesed from random .api in jason format see full values in jason formatter and can be seen in tree text and other formats
 





    