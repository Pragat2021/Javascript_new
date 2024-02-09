const name = "pragat "
const repo = 50
console.log(name + repo);
// another way to  do concatenation of string ; string interpelation we make placeholders
console.log(`hello my name is ${name.toUpperCase()} and My repo count ${repo}`);

//another way to declare a string
//here we will make a string using properties of object ; this make a string is key value pair
const newname = new String ("Pragat-iot")

// String {'Pragatiot'}
// 0
// : 
// "P"
// 1
// : 
// "r"
// 2
// : 
// "a"
// 3
// : 
// "g"
// 4
// : 
// "a"
// 5
// : 
// "t"
// 6
// : 
// "i"
// 7
// : 
// "o"
// 8
// : 
// "t"
// length
// : 
// 9
console.log(newname[0]);//accesing a key
console.log(newname.__proto__);//prototype => {}(Object symbol in javscript)


console.log(newname.length);
console.log(newname.toUpperCase()); // PRAGATIOT
console.log(newname.lastIndexOf()); //-1
console.log(newname);
console.log(newname.charAt(2)); // check the value at specific index

const newstring = newname.substring(0,4) // break the string from given index 0 ,1,2,3 but not 4
console.log(newstring); //Prag

const anotherstring = newname.slice(-8 , -4 )// in slice we can take negative values as well
console.log(anotherstring);
// substrong  doesnt support negative string it neglects the neagtive sign and do consider the value as positive


const newstring1 = "  Pragat is a good  boiiiii    "  // now remove the starting and ending spaces
console.log(newstring1);
console.log(newstring1.trim());

const url = "http://pragat.com/pragat%20shukla"

console.log(url.replace('%20','-'));// replace syntax = > ("value to be replaced" , 'new value')
console.log(url.includes("pragat")); // TRUE
console.log(url.includes("Rahul")); //FALSE

console.log(newstring1.split(""));
console.log(newstring1.split("-"));
