const marvelheroes = ["Ironman" , "Thor" ,"Hulk"]
const dc = ["Superman" , "Flash" , "Batman"]

// marvelheroes.push(dc)
// console.log(marvelheroes);// we get array inside our array 
// //Output = > [ 'Ironman', 'Thor', 'Hulk', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvelheroes[3] [1]); // acces values in pushed up array is not good in js
// push works on existing array


// //Concatenation = >  returns new array  
// const allheros = marvelheroes.concat(dc)
// console.log(allheros); // Output = > [ 'Ironman', 'Thor', 'Hulk', 'Superman', 'Flash', 'Batman' ]
 

const allnewhero = [...marvelheroes, ...dc]
// console.log("New array is");
// // console.log(allnewhero); //Output =>  
// // [ 'Ironman', 'Thor', 'Hulk', 'Superman', 'Flash', 'Batman' ]




const anotherarray = [1,2,3,[4,5,6],[6,7,[4,5]]] // To make them in single array we use flat and to know the depth we write infinite
const realanotherarray = anotherarray.flat(Infinity)
// console.log(realanotherarray);
// // OUTPUT = > [
//   1, 2, 3, 4, 5,
//   6, 6, 7, 4, 5
// ]



console.log(Array.isArray("Pragat")); // check array or not 
console.log(Array.from("Pragat")); // make array 
console.log(Array.from({name: "Pragat"})); // This not create array is make an empty array to make them array we need to give a key value pair


let score1= 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //make arrays from a given number 
