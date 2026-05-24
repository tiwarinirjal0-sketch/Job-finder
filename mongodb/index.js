import dotenv from "dotenv";
dotenv.config({ path: "../.env" });



import { MongoClient } from "mongodb"



const client = new MongoClient(process.env.MONGO_URI)

async function main() {
  await client.connect()
  console.log("Connected to MongoDB")

  const db = client.db("practiceDB")
  const users = db.collection("users")

  
//   await users.insertMany([
//     {
//     "name" : "NIjal"
//     },{
//         "name" : "Hello"
//     }

//     ])

  console.log("Inserted user")

  // READ
  
  
  const data = await users.find().toArray()
  
  const removeables = data.filter((el)=>!(el.title && el.company))
  
  const ids = removeables.map((el)=>el._id)
  

  await users.deleteMany({ 
    _id:{$in : ids}
  })
  const titles = data.map(el=>(el.company))
  console.log(titles)
  await client.close()
}

main()