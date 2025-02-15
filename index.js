import express from "express"

const app=express();

app.get("/",(req,res)=>{
    res.send("get page all good .")
})



app.listen(5004,()=>{
    console.log("The server is up and running ...")
})