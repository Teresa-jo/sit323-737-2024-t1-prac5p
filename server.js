const express = require("express")
const app = express()
 
app.get('/',(req,res)=>{
    res.send("Hello World from AJo")
})

app.listen(3000,()=>{
    console.log("Server ready")
})