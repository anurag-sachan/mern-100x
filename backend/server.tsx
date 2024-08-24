import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app=express()
app.use(cors());

app.get('/', (req, res) =>{
    fs.readFile(path.join(__dirname,'../courses.json'),'utf8',(err,data)=>{
        if(err) return res.status(500);
        return res.status(200).json(JSON.parse(data));
    })
})

app.listen(3001);
