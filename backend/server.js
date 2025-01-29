import express from "express";
import "dotenv/config";
import { readFile } from 'fs/promises';
const jokes = JSON.parse(await readFile(new URL('./data.json', import.meta.url)));
const app=express();
const port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("<h1>Hllo This is Abhishek</h1>")
})

app.get('/api/jokes',(req,res)=>{
    res.json(jokes);
})
app.listen(port,()=>{
    console.log(`server is started at port ${port}`);
})