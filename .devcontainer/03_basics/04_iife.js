// Immediately Invoked Function Expressions (IIIFE)
//  when we want that as we write or function and it could immmediately run 
//we donot need pollution in our global scope

(function hobby ()
{
    console.log("Database connected");
})();

// ()()  => TO RESOLVE FROM OF POLLUTION FROM GLOBAL SCOPE WE USE IIFE IN WHICH A BRACKETS are ladden outside the function and function is written inside ()  these braces  and always apply "; " after the function is over


// hobby()
// Use arrows to implement a iife 
( ()=> {//unnamed iiife
    console.log("Hey Its Dbms");
})();

//Named iiife 
( (name)=> {
    console.log(`${name} is connected to dbms `);
})("Pragat");

//IIIFE inside iiife => Nested IIIFE
((Love) => {
    console.log(`${Love} loves Eating`);

    ((food) => {
        console.log(`He Loves eating ${food}`);
    })("Samosa");
 
})("Pragat");
