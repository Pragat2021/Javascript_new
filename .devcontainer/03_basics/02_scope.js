//scope starts with let , var and const
// let a = 10
// const b = 20
// var c = 30
// {} = > This is only scope when its comes ina function or conditional statements it becomes a scope
var c = 300 // not of use as we r using c as var below we have again declare c as 30 below so it will be printed
// this is global scope
if (true)
{ //=>Scope starts
    // This is local scope

    let a = 10
    const b = 20
    var c = 30
    console.log("Inner:",a);
} //scope ends

for (let i = 0; i< array.length; i++) {
  const element = array[i];
    }

// console.log(a); Not printed
// console.log(b);Not printed
console.log(c);// This is printed becoz c is var 

//  scope in code is differnet and scope in console of browser is another

