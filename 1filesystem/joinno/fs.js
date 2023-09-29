const fs= require('fs')
const path= require('path')

//  using path by joing files location and not using 'simple file name'
const ab= path.join(__dirname,'a.txt')
const bc=path.join(__dirname,'b.txt')
const op=path.join(__dirname,'op.txt')

const ans=[]

fs.readFile(ab,(err,data) =>{
    if (err) throw err
    const arr=data.toString().split('\n'); //splitting every elements by \n
    
    ans.push(...arr) //using spreading ...

    fs.readFile(bc,(err,data)=>{
        if(err) throw err
        arr2=data.toString().split('\n')
        ans.push(...arr2)

    ans.sort((a,b)=>a-b); //making modifies sorting 

    const res=ans.join('\n');

    fs.writeFile(op,res,(err)=>{
        if(err) throw err;
        console.log("filewritten successfully")
    })
    })
})