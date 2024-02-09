// we will learn about mathematics and nums in javascript
const score =400
const balance = new Number(100)
console.log(balance);

console.log(typeof balance);//object
console.log(balance.toString().length);
console.log(typeof balance);//object
console.log(balance.toFixed(2)); //100.00
console.log(balance.toFixed(1)); //100.0

const anothernumber = 23.936

console.log(anothernumber.toPrecision(3));//23.9 in precison we have to tell in how many values we need to focus

const hundreds = 123456789
console.log(hundreds.toLocaleString('en-IN')); // convert into string and break into indian number system by default it is american or international




//*************MATHS**************** */


console.log( "Maths in Javascript");
console.log(Math);
console.log(Math.round(4.999));
console.log(Math.abs(-89));
console.log(Math.floor(8.989));//8
console.log(Math.ceil(8.989));//9
console.log(Math.min(4,3,5,2,1,0,-1));
console.log(Math.max(-1,-8,-9,-54,1));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);// math random gives u value in 0 and 1 it can be 0.1 , 0.1 so to avoud this we add 1 and multiply by 10

const min = 10
const max = 20 

// generic syntax 
console.log(Math.floor(Math.random() * (max - min + 1) )+ min);
console.log(Math.floor(Math.random() * (max - min + 1) )+ min);
console.log(Math.floor(Math.random() * (max - min + 1) )+ min);
console.log(Math.floor(Math.random() * (max - min + 1) )+ min);
console.log(Math.floor(Math.random() * (max - min + 1) )+ min);
