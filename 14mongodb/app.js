const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1/movieDB')// using ip address instead of localhost:27017 / "movieDB " is a database

.then(()=>console.log('connection open'))
.catch((err)=>console.log('error connection',err))

//SCHEMA
const movschema=new mongoose.Schema({
    name:String,
    rating:Number,
    year:Number,
    isWatched:Boolean
})

//MODEL-> technically its a js class

const Movie=mongoose.model('Movie',movschema); // it creates its own collection of models name ie Movie -> movies , User->users
const sm=new Movie({name:'spiderman',year:2010,rating:9,iswatched:false})
console.log(sm)

//actually saving data into data base
sm.save()
.then(()=>console.log('movie saved'))
''


