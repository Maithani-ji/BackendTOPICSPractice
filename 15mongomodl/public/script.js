
const searchinput=document.getElementById('searchinput')



async function getmovies(text)
{
   const res= await fetch(`http://localhost:3000/search?q=${text}`) //fetching from  "the get search route" through database created in movie.js 
   const data =await res.json();  //converting to json data and fetcing data from app.js search route
   console.log(data);
}


searchinput.addEventListener('keypress',()=>{
    const text=searchinput.value;
    console.log(text)
    getmovies(text)
})

