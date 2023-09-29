const express = require('express')
const path= require('path')

const app=express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render('index')
})

// POST can have large amount of data but GET can only have small amount of data

app.get('/user',(req,res)=>{
    console.log(req.query)// get user 'query string parameters' to store value thus 'req.query ' is used
     res.send('get request')
})
app.use(express.json()) // uses for parsing 'json data' if data is given a 'json' 
app.use(express.urlencoded({extended:true}))        //                 <<<   using just for 'parsing application' 
                                                    //                    |
app.post('/user',(req,res)=>                                        //    |
{                                                                     //  |
    res.send('post req')// post uses'json object' to store value thus it  | uses 'req.body' and thus needs extra encoding to get the data out of the body                                       |      
        console.log(req.body)// gives undefined when encoding is not used | 
})

app.listen(3000,()=>{
    console.log('server is running')
})