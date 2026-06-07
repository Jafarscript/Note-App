import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";


dotenv.config()
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World")
})

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to the DB"))
.catch((error) => console.log(`Failed: ${error.message}`))


app.listen(5050, () => {
    console.log("Click the link to open the url http://localhost:5050/")
})