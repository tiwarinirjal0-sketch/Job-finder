import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connection from "./db/index.js";
import userInformation from "./models/shema.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

connection()

const app = express();
const port = process.env.PORT || 5000;

//Middile wares

app.use(express.json());
app.use (cors());

//route
app.get("/home",(req,res)=>{
    res.send("Server Started")
})

app.post("/users", async (req, res)=>{
   
  const {name,email,password} = req.body

  if(name && email && password ){
   try {

      const EmailExists = await userInformation.findOne({email})
      
      if(EmailExists){console.log("it exists")}
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await userInformation.create({
       name:name,
       email:email,
       password : hashedPassword,
        })

    console.log("sucessful interception");
    res.status(201).json({message: "User created",user});
   } catch (error) {
     res.send(error)
   }
  }else{
    res.send("why not data")
  }
})

//login route

app.post("/login", async (req,res)=>{

    const {email, password} = req.body;

    if(!email||!password) return res.status(400).json({error:"enter the pass"})

    try {
      const user = await userInformation.findOne({email})
      if(!user) return res.status(404).json({error:"email error"})
      
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch) return res.status(404).json({error : "pass error"})
      
      

     const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
      );
     res.status(200).json({
       message: "Login successful", 
       token ,
       email : user.email
      });
      
    } catch (error) {
      console.log("error: ", error)
    }

})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})