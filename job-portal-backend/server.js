import dotenv from "dotenv";
dotenv.config({path:"../.env"})


import { Scraper } from '../scraper/scraper.js';
import express from 'express';
import cors from 'cors';
import {MongoClient} from "mongodb"

const app = express();
const port = 5000;

const client = new MongoClient(process.env.MONGO_URI)


await client.connect()
const db = client.db("practiceDB")
const users = db.collection("users")  

app.use(cors())
app.use(express.json())

app.get("/",((req,res) =>{
    res.json({message:"Hello"})
    
}))

// app.get("/hello", async (req, res) => {
//     try {
       //const jobs = await users.find().toArray()
       //res.json(jobs)
        
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Failed" });
//     }
// });


app.post("/users",async(req,res)=>{
    try{
    //    const userDetails = db.collection("userDetails")
    //    await userDetails.insertOne(req.body)
       res.send(req.body)
    }catch (err) {
        console.error(err);
        res.status(500).json({ error:"error"});
    }

})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});