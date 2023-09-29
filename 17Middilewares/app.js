const express= require('express')
const app= express()

// 0. middleware call the next middleare function in stack using next function , without next() it end req,res cycle 

// app.use((req,res,next)=>{// 3. end the req-res cycle
// res.send('hijacked and cancelled cat and normal route')
// })

app.use((req,res,next)=>{// 1. middleware can exxecute any code
console.log('my first middileware')
req.user='tushar'//2. can change req,res objects
next()//use in calling the next function  middleware
})

app.use((req,res,next)=>{
console.log('my second middileware')
return next() // when RETURN a next , below code of next wont work because it wont get there 
console.log('inside my second middlieware')
})

app.get('/',(req,res)=>{

    const {user}=req //2. can chane req,res objects
    
res.send(`hello ${user}`)//we can req data through other middlewares like USER
})

app.get('/cat', (req, res) => {
    res.send('MEEOUUWW');
});
const verify=(req,res,next)=>{ // next can be used aa verification tool
    const {password} =req.query
    if(password=='apple')
    {
        return next()//-->like this in an if 
    }
    res.send('invalid response')
}
app.get('/secret',verify,(req,res)=>{// middleware can be send in a route function 
    res.send('my secret is temptation')
})

app.listen(3000,()=>{
console.log('server is running')
})