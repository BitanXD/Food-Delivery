import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.config.js';
import foodRouter from './routes/foodRoute.js';

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json()) // request from frontend to backend will be parsed using this json
app.use(cors()) // access the backend from the frontend

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})


// mongodb+srv://bitansarkar088:<db_password>@cluster0.ev3cf.mongodb.net/?