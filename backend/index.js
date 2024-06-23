import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()

//database connection
import connectDB from './config/database.js';
connectDB();
//port
const port = process.env.PORT || 5000;

const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With, Content-Type, Authorization');
    next();
});

app.use(express.json({ limit: '10mb' }));

app.use('/', (req, res) => res.json({ message: 'Welcome to our API' }));
app.use((req, res) =>
  res.status(404).json({ success: false, message: 'Not Found' })
);

const startServer = async () => {
    try {
      // connect to mongodb
      app.listen(port, () => console.log(`Server is listening on port: ${port}`));
    } catch (error) {
      console.log(error);
    }
};
  
startServer();