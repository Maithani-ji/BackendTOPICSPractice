const express= require('express')
const app=express()
const path= require('path')
const Movie=require('./models/movie')

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1/movieDB')// using ip address instead of localhost:27017 / "movieDB " is a database

.then(()=>console.log('connection open'))
.catch((err)=>console.log('error connection',err))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))//for using public

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/search',async (req,res)=>{
    const {q}=req.query
    const movies= await Movie.find({name:{$regex:`^${q}`}})
    res.json(movies) //can give this 'movies ' variable through render to another views and print movies and their info through for loops like comments
})

app.listen(3000,()=>{
    console.log('server is running')
})