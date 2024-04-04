import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"
import connectToDb from "./db/connectToDb.js";
import messageRoutes from "./routes/message.route.js";
dotenv.config()
const PORT=process.env.PORT || 5000

const app =express();
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)



app.listen(PORT,()=>{
    connectToDb()
    console.log(`server listening on port ${PORT}`)
})