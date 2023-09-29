const express = require('express')
const app= express()

// app.use((req,res)=>
// {
//     console.log('inside my app.js')
//     res.send('hello from the server')
//   //  res.status(200).send('<h1>HEElo gyuzz</h1>')
// })

app.get('/',(req,res)=>{
    res.send('home route')
})
app.get('/cat',(req,res)=>{
    res.send('meowwww')
})
app.get('/dog',(req,res)=>{
    res.send('woof woof')
}
)
app.all('*',(req,res)=>{
    res.send('requesting for wrong url')
})
app.listen(8000,()=>{
    console.log('server listening at 8000 port')
})