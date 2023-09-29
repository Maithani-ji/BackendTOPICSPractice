const express=require('express')
const app=express()
const path=require('path')
app.set('view engine','ejs')

app.set('views',path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname,'public')))// for using public folder

app.get('/',(req,res)=>{
    res.render('index')
})


// app.get('/random',(req,res)=>{
 
//     const randno= Math.floor(Math.random()*10+1)
//     res.render('random',{ randomnumber : randno})

// })
const todo=['task1','task2','task3','task4','task5']

app.get('/todos',(req,res)=>{
    res.render('todos',{todos: todo})
})

app.get('/r/:subredit',(req,res)=>{
    const {subredit}= req.params;
    
    res.render('subred',{subred: subredit})
})

app.listen(3000,()=>{
    console.log('server is running')
})