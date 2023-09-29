const express= require('express')
const path=require('path')

const app=express()
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/i',(req,res)=>{
    res.render('indx')
})

const todo=[
    "task1","task2","task3","task4"
]
app.get('/todos',(req,res)=>{
        
    res.render('todos',{todos:todo})
})
 app.listen(3000,()=>{
    console.log('server is listening')
})