const express = require('express')
const app = express()
const PORT = 3000;

app.get('/',(req,res)=>{
    
    res.send("Learning Express")
})
app.listen(PORT) //port
console.log("server is running")

