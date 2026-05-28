import dotenv from "dotenv";
dotenv.config({path:"../.env"})



import mongoose from "mongoose";



const connection = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("succesul connection")
        console.log("conncectionHost:")

    } catch (error) {
       console.log("Error:", error)   
    }
}

export default connection;
