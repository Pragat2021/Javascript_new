// converion in javascript
let score = 33 //NUMBER
let scores = "33abc"//string
// IF we know we have to work on number so we can use "Number" keyword befor any data and get a number value 
let newvalue=Number(scores)//NUMBER
let newvalue1=null
let newvalue2=true
let newvalue3=undefined
let newvalue4 = "Pragat"
let newvalue5=Number(newvalue4)
console.log(typeof score);//type of score
console.log(typeof(score));//another way to get type of
console.log(typeof scores);
console.log(typeof newvalue);//type casting converting a string to Number
console.log(newvalue);// the value is converted to NaN\
console.log("Value of newvalue1");
console.log(typeof newvalue1 );//Object
console.log("value of newvalue2");
console.log(typeof newvalue2);//boolean
console.log("value of newvalue3");
console.log(typeof newvalue3);//undefined
console.log("Values");
console.log([newvalue1,newvalue2,newvalue3]);//[null,true,undefined]
console.log(typeof newvalue5);//Number
console.log((newvalue5));//Nan
//what is Nan-??
//OUTPUT = >
// number
// number
// string
// number





//Conversin in boolean type
//1  => true; 0 = >  false;
//"" = > false
//"Pragat"=> True


let nos =33
let samplestring = String(nos)
console.log(samplestring);//33 answer
console.log(typeof samplestring);