// const myobj = {
//     py : "python",
//     js:"JavaScript",
//     c: " celvin",
//     f:"fahreinheit"

// }

// for (const key in myobj) {
//     console.log(`${key} shortcut is for ${myobj[key]}`);
// }

// const prolang = [ "c" , "java" , "js" , "python" , "ruby"]
// for (const key in prolang) {
//     console.log(key); // in arrays forin loop key return keys whereas in   arrays forof return val8ues directly
//     console.log(prolang[key]);
        
//     }


    const map = new  Map()
    map.set('IN' , "iNDIA")
    map.set('USA' , "UNITED STATES OF AMERICA")
    map.set('THL' , "Thailand")
    map.set('IN' , "iNDIA")

// Map is non itterable hence this is not used

    for (const k in map) 
    {
         console.log(k);  
    }

    //  for array we use foreach loop
    
