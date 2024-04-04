import mongoose from "mongoose";

const connectToDb= async()=>{
    console.log("called")
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDb")
    } catch (error) {
         console.log("Error connection to MongoDb",error.message)
    }
}

export default connectToDb;