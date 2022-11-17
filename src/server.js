const express= require("express");


const app= express();

app.get('/',(req,res)=>{
    res.status(200);
    res.json({msg:"Hi"})
    console.log("Hello from Express")
})

module.exports = app;