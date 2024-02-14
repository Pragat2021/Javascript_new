// const code = ["js" , "c++", "c" , "python"]

// const values = code.forEach((item)=>{
//     console.log(item);
// })

// console.log(values);// this always gives undefined
// // foreach loop always gives undefined it doesnt give any thing in return 



const nums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ,9 ,10]
// filter return the values
// const newnums =nums.filter((number)=> {
//     let n = number>4
//     return n
// })

// // use for each with same logic but not filter  this will only return the values with foreach 
// const newnums = []
// nums.forEach((item)=>{
//     if(item>4)
//     {
//         newnums.push(item)
//     }
// })
// console.log(newnums);


// Books object example 

const books =[
   {title:"book1",genre:"His",ed:"2007"},
   {title:"book2",genre:"His",ed:"2008"},
   {title:"book3",genre:"geo",ed:"2007"},
   {title:"book4",genre:"mths",ed:"2009"},
   {title:"book5",genre:"scis",ed:"2005"}
]
// here without lowercase doesnt work it gives "[]" in output
let userbooks = books.filter((bk) => bk.genre.toLowerCase() === "his");

 userbooks = books.filter((bk)=> {
    return bk.ed === "2005" && bk.genre ==="scis"
}) 
// => this gives "[]" as we have opened a scope over her to remove this error use return keyword

console.log(userbooks);


