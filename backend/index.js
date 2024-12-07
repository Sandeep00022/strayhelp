import express from 'express';
import { connectDB } from './config/connection.js';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']  
  }));
app.get('/api/test', (req, res) => {
    res.json({
        message:"server working fine",
        timestamp: new Date().toISOString(),
        success:true
    })
});

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
    connectDB()
});


// Import routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);

// handle errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});