

// CLIENT SIDE STORAGE 


const express = require('express');
const parser=require('cookie-parser')//......//it will not give 'undefined' because its parsed using  cookie-parser  // install npm i cookie-parser
const app = express();
app.use(parser('secretzzzz'))//..........parser has given some secret which is stored in another folder file safely for providing 'signed' cookies

app.get('/', (req, res) => {
    
res.send('home route')})


app.get('/greet',(req,res)=>{
    res.send('hello')
    console.log(req.cookies)//it will console 'undefined' if not parsed using  cookie-parser  // install npm i cookie-parser
})
app.get('/setcookies',(req,res)=>{
    res.cookie('name','S')//setting cookie
    res.cookie('age','20')
    res.cookie('location','delhi',{maxAge: 7*24*60*60*1000, httpOnly:true})//property of cookies 
    res.send('cookies set in client side storage ,see it in inspect->application->cookies')
})

app.get('/signedcookie',(req,res)=>{
    res.cookie('fruit','apple',{signed:true})//propert of cookie which encode cookie by giving secret to parser()
    res.send('sent u a signed cookie')
})

app.listen(3000, () => {
console.log('server is running on port 3000');
})