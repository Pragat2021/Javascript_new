// for loop ( Initialization , condition , Upgradation)
// for (let i = 0; i < 10; i++) {
//     const element = i
//     if (element === i )
//     {
//         break;
//     }
// console.log(i);
// }

// array loops

let myarray = ["Flas","spm" , "spd"]
for (let index = 0; index < myarray.length; myarray++) {
    const element = myarray[index];
    // console.log(element);
}


// Break and continue
for (let index = 0; index <= 10 ; index++) {
    if (index === 5)
    {
        console.log("Detected 5");
        break;

    }
    console.log(`value of i is ${index}`);
}

// Continue

// for (let index = 0; index <= 10 ; index++) {
//     if (index === 5)
//     {
//         console.log("Detected 5");
//         continue;

//     }
//     console.log(`value of i is ${index}`);
// }