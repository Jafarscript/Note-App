import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"
import notesRoutes from "./routes/notes.js"


dotenv.config()
const app = express();
app.use(cors({
    origin: "https://note-app-three-rose.vercel.app"
}))


app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use("/auth", authRoutes)
app.use("/notes", notesRoutes);


mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to the DB"))
.catch((error) => console.log(`Failed: ${error.message}`))


app.listen(5050, () => {
    console.log("Click the link to open the url http://localhost:5050/")
})