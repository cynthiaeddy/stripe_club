import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
// import router from "./routes/stripe-route.mjs"
dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 5050;
app.use(cors());
app.use(express.json());




mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log('connected to mongodb')
})


// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

