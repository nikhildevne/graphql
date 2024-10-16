const express = require('express')
const app = express();
let template = `<h1>hello world</h1>`
app.get('/',(req,res)=>{
    res.send(template)
})

app.listen(3000,()=>{
    console.log('working')
})