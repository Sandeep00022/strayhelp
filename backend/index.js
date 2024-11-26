import express from 'express';
import { connectDB } from './config/connection.js';

const app = express();

app.use(express.json());

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
