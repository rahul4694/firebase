const express=require('express');
const app=express()


app.get('/', (req, res)=>{
    res.send('home page');
})
app.listen(5050,()=>{
    console.log('server is runninng on 5050')
})