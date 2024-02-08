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


//*******Operations ************ */

let value = 3
let negvalue = -value
console.log(negvalue);
// output = -3
console.log("Vrious Operator in Javascript");
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2**3);//power
console.log(2/3);
console.log(2%3);

//***Contatenation / join 2 strings */
let str1 = "Pragat "
let str2= "Shukla"
let str3 = str1 + str2
//console.log("value of str3 is:" str3); = > This statement gives error in javascript
// to avoid this we use
console.log("value of str3 is :");
console.log(str3);

console.log("1"+"2");// These both will give 12 output
console.log("1"+2);
// now lets see some new behaiour of our javascript
console.log("1" +2 +2); //122
console.log(1 + 2+"2");//32
//there is a guidline for to premitive (convert to prefered type) these are given by ECMA guillines
console.log(3 + 4 *5 % 3);//we do not use these types of code in javascript as why to confuse our tester ; output = > 5

//***TRicky Conversion
console.log(+true);//this is possible
//console.log(true+); => This is not possible
console.log(+"");//=> output is 0 

let num1,num2,num3
num1 = num2 = num3 = 2+2
console.log([num1,num2,num3]);
//This is good but not preferd in industry

let gamecounter = 100
++gamecounter; // ++ gamecounter and gamecounter++ both are acceptable ++gamecounter increment themn use while gamecounter++ is use and then incremental 
console.log(gamecounter);
//Link to study
//https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion