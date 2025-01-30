import express from "express";
import "dotenv/config";
import cors from 'cors';
import { readFile } from 'fs/promises';
const jokes = JSON.parse(await readFile(new URL('./data.json', import.meta.url)));
const app=express();
const port=process.env.PORT || 3000;



// Use environment variable for the frontend URL
const frontendUrl = process.env.FRONTEND_URL ; // Default to local URL if not set

// CORS middleware
app.use(cors({
  origin: frontendUrl,  // Set dynamic origin based on env variable
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.get('/',(req,res)=>{
    res.send("<h1>Hllo This is Abhishek</h1>")
})

app.get('/api/jokes',(req,res)=>{
    res.json(jokes);
})
app.listen(port,()=>{
    console.log(`server is started at port ${port}`);
})