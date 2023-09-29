const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1/relation')// using ip address instead of localhost:27017 / "movieDB " is a database

.then(()=>console.log('db connected'))
.catch(err=>console.log(err))
mongoose.set('strictQuery', false);

const userschema=new mongoose.Schema({
    name:String,
    age:Number,
    address:[
        {
            _id: { id: false },//to make id not work of 1:few relationship
            city:String,
            country:String
           

        }
    ]
})

const User=mongoose.model('User',userschema);

async function adduser(){
const v=await User.create({name:'vivek',age:20})
console.log(v)
console.log('user created')
}

adduser()

async function address()
{
    const user = await User.findById('63fc8cbbafffddb2ab7ce5e5')
    user.address.push({city:'delhi',country:'india'})
    await user.save()
    console.log('saved')
}
address()