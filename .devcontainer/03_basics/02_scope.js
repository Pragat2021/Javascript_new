//scope starts with let , var and const
// let a = 10
// const b = 20
// var c = 30
// {} = > This is only scope when its comes ina function or conditional statements it becomes a scope
var c = 300 // not of use as we r using c as var below we have again declare c as 30 below so it will be printed
// this is global scope
if (true)
{ //=>Scope starts
    // This is local scope or block level scope


    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner:",a);
} //scope ends

// for (let i = 0; i< array.length; i++) {
//   const element = array[i];
//     }

// console.log(a); Not printed
// console.log(b);Not printed
//  console.log(c);// This is printed becoz c is var 

//  scope in code is differnet and scope in console of browser is another



// ****Nested Function ******
function one ()
{
  const username = "Pragat"

  function two ()
  {
    const website = "Pragat yUoutube"
    // console.log(username);
  }
  // console.log(website); => This is not responding as website is inside the scope and we are accesing it outside the scope and it is not making program to come for two ()

   two()
}
// one()

//  when function is called ; there os created a separate scope for a function call
//  child can access parent 


//  if else is also a scope

if (true){
  const username = "Pragat"
  if (username ==="Pragat")
  {
    const webs = " PragatYoutube"
    // console.log(username + webs);
  }
  // console.log(webs); => Here webs is not accesed as webs is outside the scope

}
// console.log(username);= > This is also not executable as it is outside our scope




// .................Interseting--------------------

console.log(addone(5));
console.log(addtwo(8));
// console.log(addtwo(9)); => This is erroe as we are accessing a function before declaration because it is being hold by a const add two moreover it has become a expression

function addone (num)
{
  return num +1
}

 

//  here this is called as a expression 
function addtwo(num)
{
  return num + 2 
}
addtwo(5)
// console.log(addone());  => NaN