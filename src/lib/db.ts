import { MongoClient } from "mongodb"

// const uri = process.env.MONGO_URI!
const uri = "mongodb://localhost:27017/nextapp"
const client = new MongoClient(uri)

let db: any

export async function connectDB() {
  if (!db) {
    await client.connect()
    db = client.db("nextapp")
  }
  return db
}