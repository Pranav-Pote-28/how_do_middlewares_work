import express from "express"

const app=express();

app.get("/",(req,res)=>{
    res.send("we are on trial_branch")
})



app.listen(5004,()=>{
    console.log("The server is up and running ...")
})