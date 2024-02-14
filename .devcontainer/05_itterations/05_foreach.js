const code = ["js" , "c" , "python" , "rubuy"]
code.forEach

// here this is cal back function no need to give akues
// code.forEach(item)=>
// {
//     console.log(item);
// }

// function printme(item)
// {
//     console.log(item);
// }
// code.forEach(printme)

// code.forEach((item , index , arr ) =>
// {
//     console.log(item , index , arr);
// })


// objects in foreach

const mycode = [
    {
        lang:"javascript",
        file:"Js"
    },
    {
        lang:"Python",
        file:"py"
    },
    {
        lang:"c++",
        file:"cpp"
    }
]
mycode.forEach((item) =>{

    console.log(item.lang , item.file);
})