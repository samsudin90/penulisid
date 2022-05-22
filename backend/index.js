import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import router from "./router/Index.js";
import path from 'path'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blog', router)

const __dirname = path.resolve()
app.use('/images', express.static(path.join(__dirname,'images')))
mongoose.connect("mongodb://mongod:27017/blog").then(() => {
    app.listen(5000, () => console.log("db oke, running on http://localhost:5000/"))
}).catch(err => console.log(err))


app.get("/a", (req, res) => {
    res.json("asdf")
})