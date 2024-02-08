// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 >= 1);
// console.log(2 <= 1);

// console.log("2" > 1);//True
// console.log("02" > 1);//True; these both ("2") is converted into number
// becuse of this reason we shift toward typescript which allows only same datatype to be compared
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// in == null converted ny js to -> 0
console.log(undefined == 0);
console.log(undefined == 1);
console.log(undefined > 1);
console.log(undefined < 1);
// undefined always gives false
// comparison and equality check both are different in javascript

//*********Strict check (===) => check strictly it will only check for sam datatypes */
//"=== " doesnot convert into anything
console.log("Strict compare****");
console.log("2" === 2); // False ; becoz "2 " is a string whereas 2 is a number
console.log("************************* No Strict compare just normal compare*****************************");
console.log("2" == 2); //True ; becoz "2 " is converted into number by "==" operator and hence ( 2 ==  2) is True is answer


