const mongoose=require('mongoose')

//SCHEMA with key:{-,-,-,-} is called VALIDATION
const movschema=new mongoose.Schema({
    name:{
        type:String,
    required:true,
    maxLength:25
            },
    rating:{
        type:Number,
        min:1,
        max:[10,'rating exceeding greater than 10'],
        required:true

    },
    year:{
        type:Number,
        min:1990
    }
    // isWatched:{
    //     type:Boolean,
    //    default:false    
    // }
})

//MODEL-> technically its a js class

const Movie=mongoose.model('Movie',movschema); // it creates its own collection of models name ie Movie -> movies , User->users
const sm=new Movie({name:'spiderman',year:2010,rating:9})
const sp=new Movie({name:'superman',year:2011,rating:9.74})
const bm=new Movie({name:'batman',year:2008,rating:9})
const fl=new Movie({name:'flash',year:2007,rating:8})
const aq=new Movie({name:'aquaman',year:2018,rating:7.74})

// console.log(sm)

//actually saving data into data base
sm.save()
sp.save()
bm.save()
fl.save()
aq.save()
.then(()=>console.log('movie saved'))

module.exports=Movie