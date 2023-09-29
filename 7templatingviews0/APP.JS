const express=require('express')
const app=express()
const path=require('path')



app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))//using path to use 'views' from outside the template module

app.get('/',(req,res)=>{ //template: first program using views 
    res.render('index')
})




app.listen(3000,()=>{
    console.log('server is running')
})