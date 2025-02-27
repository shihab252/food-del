import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


//app config
const app =express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();


//api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploades'));


app.get("/",(req,res)=>{
    res.send("Working")
})

app.listen(port,()=>{
    console.log(`server is started on http://localhost:${port}`)
})


//mongodb+srv://Shihabkhan:OpCuXx04MwL6Q5lX@cluster0.z9drg.mongodb.net/?