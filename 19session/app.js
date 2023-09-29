


//                             SERVER SIDE STORAGE : FOR PROVIDING UNIQUE IDS TO USER TO RECORD THEIR SESSION
//                              NPM I EXPRESS-SESSION




const express = require('express');
const session = require('express-session');

const app = express();


const sessionconfig={
    secret: 'cat',
    resave: false,
    saveUninitialized: true
    
}

app.use(session(sessionconfig)) // like cookies we can send an object as secret to session with its properties

app.get('/', (req, res) => {
res.send ('home route')});

app.get('/setuser',(req,res)=>{//inspect >> application>> cookies >>connect
    const {user}=req.query
    req.session.user=user   
    res.send('stored user into session successfully')
})

app.get('/greet', (req, res) => {
    const { user} = req.session;
    res.send(`Hello from ${user}`);
});

app.get('/viewcount', (req, res) => {
    if (!req.session.viewcount) {
        req.session.viewcount = 1;
    } else {
        req.session.viewcount += 1;
    }
    res.send(`You viewed this page ${req.session.viewcount} times`);
});










app.listen(3000, () => {
console.log('listening on port 3000');
})