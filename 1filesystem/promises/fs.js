const fs= require('fs')
const path= require('path')

//  using path by joing files location and not using 'simple file name'
const ab= path.join(__dirname,'a.txt')
const bc=path.join(__dirname,'b.txt')
const op=path.join(__dirname,'op.txt')

const ans=[]

//not OPTIMISED  due to call back hell of 

// function readab()
// {
//     return new  Promise((resolve,reject)=>
//     {
//         fs.readFile(ab,(err,data)=>
//         {
//             if(err) throw err
//              resolve(data.toString().split('\n'))
//         })
//     })
// }

// function readbc()
// {
//     return new Promise((resolve,reject)=>
//     {
//         fs.readFile(bc,(err,data)=>{
//             if(err) throw err
//              resolve(data.toString().split('\n'))
// }
// )}
// )
// }


function read(path)
//single function for reading two files
{
    return new Promise((resolve,reject)=>
    {
        fs.readFile(path,(err,data)=>{
            if(err) throw err;
            resolve( data.toString().split('\n'))
}
)}
)
}


function writeop(res)
{
    return new Promise((resolve,reject)=>{

        fs.writeFile(op,res,(err)=>{
            if(err) throw err;
            resolve()   
        })
    })
}

read(ab)
        .then((arr1)=>{
            ans.push(...arr1)
            return read(bc)
                })
                .then((arr2) => {
                    ans.push(...arr2);
                    
                    ans.sort((a, b) => a - b);
                
                    const res = ans.join('\n');
                    return writeop(res);
                })
        .then(()=>
        {
            console.log('file written successfully')
        })

        .catch((err)=>{
            console.log('inside reject')
            console.log(err)
        })

      