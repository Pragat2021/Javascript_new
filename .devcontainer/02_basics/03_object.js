// 2 ways to declare objects = > AS A constructor & literal
// when we made by constructor it is singleton i.e. single object whereas in literal its not a singleton
const symb = Symbol("key1")
Object.create // contructor method 
const jsuser = {
    name : "Pragat",
    "full name" : "Pragat shukla",// this cannot be accesed by jsuser.fullname , it can be accesed by jsuser["full name"]
    //(symb : "key1") // this is not a symbol datatype its string only 
    // to use this as a symbol we have a syntax
    [symb] : "key1",
    class : "Cs_IOt ",
    age : 21,
    email : "pragat@gmail.com",
    lastlogindays : ["Monday","Tuesday","wednesday"]

}// declared by object literals

console.log(jsuser.email);
// console.log(jsuser[email]); this is not acceptable in this form in this form we need to give in form of string
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[symb]);
console.log(typeof symb);

// change value
jsuser.email = "Shukla@gmail.com"
//lock value
// Object.freeze(jsuser)
jsuser.email = "PKS@gmail.com"
console.log(jsuser.email);

//function declare they arr treated as variables
jsuser.greeting = function()
{
    console.log("Hello user");
}

// console.log(jsuser.greeting); = > This gives undefined
// console.log(jsuser.greeting);=>  this will return an funstion only
console.log(jsuser.greeting());

jsuser.greeting2 = function(){
    //now do string interpellation
    console.log(`Hello js user , ${this.name}`);
}
console.log(jsuser.greeting2());
// undefined is also given in output becoz one execution is done by our system execution  in browser
// we always access with jsuser.email nut sometimes we have to do with jsuser["email"]


//  these were object literals