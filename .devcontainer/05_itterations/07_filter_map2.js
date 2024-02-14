const mynums = [ 1 , 2 , 3 ,4 ,5 , 6 ,7 ,8 , 9 ,10]

// const newnums = mynums.map((num)=>num+10) //map return itself no need of return keyword unlike filter
// console.log(newnums);

// ****Chaining Method in Map*****

// filter has a game of true or false but map doesnt have

const newnums = mynums
.map((num) => num*10)
.map((num)=> num-2) //result of first map is used here
.filter((nums)=>nums>30) // it will give values greater than 30 only
.filter((nums)=>nums!=88)// this will not allow to print 88 in our array

console.log(newnums);