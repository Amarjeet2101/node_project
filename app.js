const express = require('express')
const path = require('path')
const app =express()
const port = 8000;
//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'))
app.use(express.urlencoded())
//PUG SPECIFIC STUFF 
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
//ENDPOINTS
app.get('/',(req,res)=>{
    const params ={}
    res.status(200).render('home.pug',params)
})
app.get('/contact',(req,res)=>{
    const params ={}
    res.status(200).render('contact.pug',params)
})
app.post('/contact',(req,res)=>{
    const params ={}
    res.status(200).render('contact.pug',params)
})
//START THE SERVER
app.listen(port,()=>{
    console.log(`the app started successfully on port ${port}`)
})