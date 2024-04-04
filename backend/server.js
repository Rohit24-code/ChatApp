import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"

dotenv.config()
const PORT=process.env.PORT || 5000

const app =express();

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>console.log(`server listening on port ${PORT}`))