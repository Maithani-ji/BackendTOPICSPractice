


const url='https://jsonplaceholder.typicode.com/post/1';// site for using /post/1 like sites to see data and get data 
// using FETCH

fetch(url)// fetch returns a promise
.then((res) => {
    console.log(res)// it wont show data until we use 'RES.JSON'

    return res.json()//it also return a promise by parsing json data from res

})
.then((data)=>{
    console.log(data)// it will show data
})


//ASYNC 

async function add(x,y) //it reutrn promise wrapped output i.e, prototype,promise state i.e (fulfilled or rejected) amd promise result  
{
    return x+y
}

add(5,6)

    .then((val)=>
    {
        console.log('inside resolve')
        console.log(val)
    })
    .catch(
        (err)=>{
            console.log('inside reject')
            console.log(err)
        }
    )


    //ASYNC WITH AWAIT KEYWORD

    //await waits and process the data when the compiler get to other part and not using then or catch , instead we can use try and catch inside function
    async function getpost()
    {
        try{
        console.log('starting to fetching the data')
        const res=await fetch('https://jsonplaceholder.typicode.com/post/1')
        console.log('parsing json data from res')
        const data=await res.json()
        console.log('data fetched')
        console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }
