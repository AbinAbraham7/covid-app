const express =require("express")
const cors =require("cors")
const mongoose=require("mongoose")
const covidRouter=require("./controller/covidRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Abin:abin123@cluster0.johtm7b.mongodb.net/covid1Db?retryWrites=true&w=majority",
{useNewUrlParser:true})


app.use("/api/covid",covidRouter)
app.listen(3001,()=>{
    console.log("server is running")
})