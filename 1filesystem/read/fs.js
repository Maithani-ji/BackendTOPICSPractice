const fs = require('fs')

// fs.readfile('abx.txt',{   // USING THIS IS OPTIONAL if not using "TO STRING FUNCTION"
//     flag: 'r',
//     encoding: 'utf-8'
// },(err,data)=>
// {
//     if(err) throw err;
//     console.log(data) //gives data in encoded format

//     console.log(data.toString())  //gives data in string format
// }

fs.readFile('abc.txt',( err, data) =>{
    if(err) throw err;
    console.log(data) //gives data in encoded format 
    console.log(data.toString())  //gives data in string format
}
);