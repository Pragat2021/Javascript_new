// for of loop=> only for arrays

// ["" , "" , "" , ""] = > string in array 
// [ {} , {}] => objects in Array 


const arr = [1 , 2 , 3 , 4 ]

// for (const num of object) {
//     // here object means arr 
// }

for (const num of arr) {
    console.log(num);
}


const arr1 = ["Pragat" , "Pushkar" , "Prakhar" , "Tarun"]
for (const num  of arr1) {
    if (num === "Prakhar") {
        break;
        console.log("Not possible");    
    }
    console.log("New start");
}



// Maps in Javascript

const map = new Map ()
map.set('IN' , "iNDIA")
map.set('USA' , "UNITED STATES OF AMERICA")
map.set('THL' , "Thailand")
map.set('IN' , "iNDIA")
console.log(map);



for (const [KEY , VALUE] of map) {
    console.log(`KEY IS ${KEY} AND Value is ${VALUE}`);
    
}



//  forof loop in object

const myobj = {
    game: "Football",
    game2 : "Hockey",
    coach : "Ravi Kishan"
}

// for (const [KEY , value] of myobj) {
//     console.log(key , ":" , value);
// }  This doesnt work in object
