


// REST (represtational state transfer ) type of 'styling' of path like:-

// diplay blogs -> /blog   new nlog ->show form to make blog -> /blogs/new   create-> /blogs  show-> show info of that blog -> /blogs/:id     edit blog-> /blogs /:id/edit  update blog -> /blogs/:id  destroy blog-> /blogs/:id



const express = require('express')
const path= require('path')
const app=express()
const methodOverride=require('method-override') //using method override to use PATCH by overriding post
const {uid: uuid}=require('uuid')// for providing Unique IDsss 

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true})) //for making use of REQ.BODY
app.use(methodOverride('_method'))//changing valude of POST using _method=delete or patch

let comment=[
    {
        id:1,
        username:'abc',
        text : "hello"
    },
    {
        id:2,
        username:'cds',
        text:"hell"
    },
    {
        
        id:3,
        username:'def',
        text:"help"
    }
]

//list all the comment

app.get('/comments',(req,res)=>{
   
    res.render('index',{comments: comment})
})

//creating new commment through form

app.get('/comments/new',(req,res)=>
{      res.render('new')
})

//creating new comment by submitting

app.post('/comments',(req,res)=>{
    const{username , text }=req.body
    comment.push({id: comment.length+1,username,text})
    //res.send(req.body)
    res.redirect('/comments')
})

// show one comment through id 

app.get('/comments/:cid',(req,res)=>{
    const {cid}=req.params
    const commentz=comment.find((commen)=> commen.id===parseInt(cid));
    res.render('show',{commentz})

})

// show edit form 

app.get('/comment/:id/edit',(req,res)=>{
    const{id}=req.params
    const commentz=comment.find((commen)=>commen.id===parseInt(id))

     res.render('edit',{commentz})
    // res.send(commentz)
}
)
//editing and showing to /show
app.patch('/comments/:commentid',(req,res)=>{
  const {commentid}= req.params
  const commentz=comment.find((commen)=> commen.id===parseInt(commentid));
  commentz.username=req.body.username
  commentz.text=req.body.text
//   console.log(req.body)
  res.redirect('/comments')
})

//delete routinng to delete a comment
app.delete('/comments/:commentid',(req,res)=>{
    const{commentid}=req.params
    comment=comment.filter((commen)=>commen.id!==parseInt(commentid)) //changing comments of const to let to delete otherwise delete wont work with CONST 
    res.redirect('/comments')
})
app.listen(3000,()=>
{
    console.log('server is running')
})