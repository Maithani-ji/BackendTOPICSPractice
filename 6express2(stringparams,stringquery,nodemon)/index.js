const express = require('express')
const app= express()

// Working with parameters as subredit from request 

app.get('/r/:subredit',(req,res)=>{
    //console.log(req.params)
   // res.send('subredit')

   const {subredit}= req.params

   res.send(`you are watching ${subredit}`)
})

app.get('/:customer/:cid',(req,res)=>{
    console .log (req.params)
    const { customer,cid}= req.params
    res.send(`you are going to ${customer} 's with id ${cid} ` )
})


//working with Query String 

app.get('/search',(req,res)=>{
    console .log (req.query)
    const{q}= req.query
    res.send(`you are searching with keyword ${q}`)
})
app.listen(8000, () =>{
        console.log('server listening at 8000 port')
    })