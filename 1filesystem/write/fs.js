const fs = require('fs')

const data= 'i am writing this data to "def.txt" '


fs.writeFile('def.txt',data,(err) =>{
    if(err) throw err;
    console.log('Files written succesfully')
})